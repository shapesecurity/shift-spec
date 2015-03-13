/**
 * Copyright 2015 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var tokenize = require('./webidl-tokenizer').tokenize;

var i = 0;
var tokens;

function peek() {
  return tokens[i];
}

function eat(token) {
  if (tokens[i].value === token) {
    return lex();
  }
  return null;
}

function match(token) {
  return tokens[i].value === token;
}

function matchType(tokenType) {
  return tokens[i].type === tokenType;
}

function lex() {
  return tokens[i++];
}

function expect(token) {
  if (peek().value === token) {
    i++;
    return token;
  } else {
    var p = peek();
    throw new Error("[" + p.line + ":" + p.column + "]" + " Expected " + token + ", " + p.value + " found.");
  }
}

function expectType(tokenType) {
  var p = peek();
  if (p.type === tokenType) {
    i++;
    return p;
  } else {
    throw new Error("[" + p.line + ":" + p.column + "]" + " Expected " + tokenType + ", " + p.value + " found.");
  }
}

function parseExtendedAttribute() {
  // TODO: implement more
  return {
    type: "extendedAttribute",
    name: parseIdentifier(),
  }
}

function parseExtendedAttributeList() {
  var result = [];
  if (eat("[")) {
    while (!eat("]")) {
      result.push(parseExtendedAttribute());
    }
  }
  return result;
}

function parseTypeSuffixStartingWithArray() {
  if (match("[")) {
    expect("[");
    expect("]");
    var f = parseTypeSuffix();
    return function (t) {
      return f({type: "array", t: t});
    };
  } else {
    return function id(t) {
      return t
    }
  }
}

function parseTypeSuffix() {
  if (match("?")) {
    expect("?");
    var f = parseTypeSuffixStartingWithArray();
    return function (t) {
      return f({type: "nullable", t: t});
    };
  } else {
    return parseTypeSuffixStartingWithArray();
  }
}

function parseUnionMemberType() {
  switch (peek()) {
    case "(":
      var u = parseUnionType();
      return parseTypeSuffix()(u);
    case "any":
      expect("any");
      expect("[");
      expect("]");
      var t = {type: "array", t: {type: "any"}};
      return parseTypeSuffix()(t);
    default:
      return parseNonAnyType();
  }
}

function parseUnionMemberTypes() {
  var result = [];
  while (eat("or")) {
    result.push(parseUnionMemberType());
  }
  return result;
}

function parseUnionType() {
  expect("(");
  var u1 = parseUnionMemberType();
  expect("or");
  var u2 = parseUnionMemberType();
  var ur = parseUnionMemberTypes();
  expect(")");
  return {type: "union", ts: [u1, u2].concat(ur)};
}

function parseNonAnyType() {
  var t, p;
  switch (peek().value) {
    case "string":
    case "double":
    case "boolean":
      p = lex();
      t = {type: p.value};
      break;
    case "unsigned":
      lex();
      switch (peek().value) {
        case "long":
          lex();
          t = {type: "unsigned long"};
          break;
      }
      break;
    // TODO: more primitive types?
    default:
      t = {type: "ref", name: parseIdentifier()};
      break;
  }
  return parseTypeSuffix()(t);
}

function parseSingleType() {
  if (match("any")) {
    return parseTypeSuffixStartingWithArray()({type: "any"});
  }
  return parseNonAnyType();
}

function parseType() {
  if (match("(")) {
    var t = parseUnionType();
    return parseTypeSuffix()(t);
  }
  return parseSingleType();
}

function parseIdentifier() {
  return expectType("identifier").value;
}

function parseTypeDef() {
  expect("typedef");
  var ea = parseExtendedAttributeList();
  var type = parseType();
  var ident = parseIdentifier();
  expect(";");
  return {
    type: "typedef",
    ea: ea,
    t: type,
    name: ident
  };
}

function parseEnumValueList() {
  var result = [expectType("string").value];
  while (match(",")) {
    expect(",");
    result.push(expectType("string").value);
  }
  return result;
}

var parseEnum = function () {
  expect("enum");
  var ident = parseIdentifier();
  expect("{");
  var vals = parseEnumValueList();
  expect("}");
  expect(";");
  return {
    type: "enum",
    name: ident,
    values: vals,
  };
};

function parseInheritance() {
  if (eat(":")) {
    return parseIdentifier();
  }
  return null;
}

function parseAttribute() {
  var readonly = !!eat("readonly");
  expect("attribute");
  var t = parseType();
  var name = parseIdentifier();
  expect(";");
  return {
    type: "attribute",
    readonly: readonly,
    t: t,
    name: name,
  };
}

function parseAttributeOrOperation() {
  switch (peek().value) {
    case "stringifier":
    case "static":
    case "getter":
    case "setter":
    case "creator":
    case "deleter":
    case "legacycaller":
    case "inherit":
      throw new Error("Not implemented");
    case "readonly":
    case "attribute":
      return parseAttribute();
    case ";":
      expect(";");
      return parseAttributeOrOperation();
  }
}

function parseInterfaceMember() {
  if (match("const")) {
    throw new Error("Not implemented");
  }
  return parseAttributeOrOperation();
}

function parseInterfaceMembers() {
  var result = [];
  while (!match("}")) {
    result.push({
      ea: parseExtendedAttributeList(),
      member: parseInterfaceMember()
    })
  }
  return result;
}

function parseInterface() {
  expect("interface");
  var ident = parseIdentifier();
  var inherit = parseInheritance();
  expect("{");
  var members = parseInterfaceMembers();
  expect("}");
  expect(";");
  return {
    type: "interface",
    name: ident,
    inherit: inherit,
    members: members,
  };
}

function parseImplementsStatement() {
  var ident = parseIdentifier();
  expect("implements");
  var parent = parseIdentifier();
  expect(";");
  return {
    type: "impl",
    name: ident,
    parent: parent,
  };
}

function parse(source) {
  tokens = tokenize(source);
  var result = [];
  while (peek()) {
    switch (peek().value) {
      case "typedef":
        result.push(parseTypeDef());
        break;
      case "interface":
        result.push(parseInterface());
        break;
      case "enum":
        result.push(parseEnum());
        break;
      case "callback":
      case "exception":
      case "dictionary":
      case "partial":
        throw new Error("Not implemented");
      default:
        result.push(parseImplementsStatement());
    }
  }
  return result;
}

exports.parse = parse;
