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

var i;
var length;
var source;
var line, lineStart;

function skipBlockComment() {
  var hasStar = false;
  while (i < length) {
    var ch = source.charAt(i++);
    if (hasStar && ch === '/') {
      return;
    } else {
      hasStar = ch === '*';
      if (ch === '\n') {
        line++;
        lineStart = i;
      } else if (ch === '\r') {
        if (source.charAt(i) === '\n') {
          i++;
        }
        line++;
        lineStart = i;
      }
    }
  }
  throw new Error("Unterminated block comment");
}

function skipLineComment() {
  while (i < length) {
    var ch = source.charAt(i++);
    if (ch === '\r') {
      if (source.charAt(i) === '\n') {
        i++;
      }
      line++;
      lineStart = i;
      break;
    } else if (ch === '\n') {
      line++;
      lineStart = i;
      break;
    }
  }
}

function skipWS() {
  while (i < length) {
    var ch = source.charAt(i);
    if (ch === ' ' || ch === '\t') {
      i++;
    } else if (ch === '\r') {
      i++;
      if (source.charAt(i) === '\n') {
        i++;
      }
      line++;
      lineStart = i;
    } else if (ch === '\n') {
      i++;
      line++;
      lineStart = i;
    } else if (source.charAt(i) === '/') {
      if (source.charAt(i + 1) === '*') {
        i += 2;
        skipBlockComment();
      } else if (source.charAt(i + 1) === '/') {
        i += 2;
        skipLineComment();
      } else {
        throw new Error("Unexpected character :" + source.charAt(i + 1));
      }
    } else {
      break;
    }
  }
}

function scanString() {
  var start = i;
  i++;
  while (i < length) {
    var ch = source.charAt(i++);
    if (ch === '"') {
      return "string";
    }
  }
  throw new Error("Unterminated string");
}

function scanIdentifier() {
  var start = i;
  i++;
  while (i < length) {
    var ch = source.charAt(i);
    if (ch === '_' || 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '0' <= ch && ch <= '9') {
      i++;
    } else {
      break;
    }
  }
  return "identifier";
}

function scan() {

  var ch = source.charAt(i);

  switch (ch) {
    case ':':
    case ';':
    case '{':
    case '}':
    case '[':
    case ']':
    case '(':
    case ')':
    case '?':
    case ',':
      i++;
      return ch;
    case '"':
      return scanString();
    default:
      if (ch === '_' || 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z') {
        return scanIdentifier();
      } else {
        throw new Error("Unexpected character: " + ch);
      }
  }
}

function tokenize(text) {
  i = line = lineStart = 0;
  source = text;
  length = source.length;
  var result = [];
  skipWS();
  while (i < length) {
    var start = i, startLine = line, startColumn = i - lineStart;
    var tokenType = scan();
    result.push({
      start: start,
      line: startLine,
      column: startColumn,
      end: i,
      value: source.slice(start, i),
      type: tokenType
    });

    skipWS();
  }
  return result;
}

exports.tokenize = tokenize;
