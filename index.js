// Generated by src/generate-spec.js. 

/**
 * Copyright 2015 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
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

// Meta data generated from spec.idl.
exports.default = (function() {
  var SPEC = {};

  var BOOLEAN = { typeName: "Boolean" };
  var DOUBLE = { typeName: "Number" };
  var STRING = { typeName: "String" };

  function Maybe(arg) { return { typeName: "Maybe", argument: arg }; }

  function List(arg) { return { typeName: "List", argument: arg }; }

  function Union() { return { typeName: "Union", arguments: [].slice.call(arguments, 0) }; }


  var VariableDeclarationKind = {
    typeName: "Enum",
    values: ["var", "let", "const"]
  };

  var AssignmentOperator = {
    typeName: "Enum",
    values: ["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "|=", "^=", "&="]
  };

  var BinaryOperator = {
    typeName: "Enum",
    values: ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "in", "instanceof", "<<", ">>", ">>>", "+", "-", "*", "/", "%", ",", "||", "&&", "|", "^", "&"]
  };

  var PrefixOperator = {
    typeName: "Enum",
    values: ["+", "-", "!", "~", "typeof", "void", "delete", "++", "--"]
  };

  var PostfixOperator = {
    typeName: "Enum",
    values: ["++", "--"]
  };

  var SourceLocation = SPEC.SourceLocation = {};
  var SourceSpan = SPEC.SourceSpan = {};
  var BindingWithDefault = SPEC.BindingWithDefault = {};
  var BindingIdentifier = SPEC.BindingIdentifier = {};
  var ArrayBinding = SPEC.ArrayBinding = {};
  var ObjectBinding = SPEC.ObjectBinding = {};
  var BindingPropertyIdentifier = SPEC.BindingPropertyIdentifier = {};
  var BindingPropertyProperty = SPEC.BindingPropertyProperty = {};
  var ClassExpression = SPEC.ClassExpression = {};
  var ClassDeclaration = SPEC.ClassDeclaration = {};
  var ClassElement = SPEC.ClassElement = {};
  var Module = SPEC.Module = {};
  var Import = SPEC.Import = {};
  var ImportNamespace = SPEC.ImportNamespace = {};
  var ImportSpecifier = SPEC.ImportSpecifier = {};
  var ExportAllFrom = SPEC.ExportAllFrom = {};
  var ExportFrom = SPEC.ExportFrom = {};
  var Export = SPEC.Export = {};
  var ExportDefault = SPEC.ExportDefault = {};
  var ExportSpecifier = SPEC.ExportSpecifier = {};
  var Method = SPEC.Method = {};
  var Getter = SPEC.Getter = {};
  var Setter = SPEC.Setter = {};
  var DataProperty = SPEC.DataProperty = {};
  var ShorthandProperty = SPEC.ShorthandProperty = {};
  var ComputedPropertyName = SPEC.ComputedPropertyName = {};
  var StaticPropertyName = SPEC.StaticPropertyName = {};
  var LiteralBooleanExpression = SPEC.LiteralBooleanExpression = {};
  var LiteralInfinityExpression = SPEC.LiteralInfinityExpression = {};
  var LiteralNullExpression = SPEC.LiteralNullExpression = {};
  var LiteralNumericExpression = SPEC.LiteralNumericExpression = {};
  var LiteralRegExpExpression = SPEC.LiteralRegExpExpression = {};
  var LiteralStringExpression = SPEC.LiteralStringExpression = {};
  var ArrayExpression = SPEC.ArrayExpression = {};
  var ArrowExpression = SPEC.ArrowExpression = {};
  var AssignmentExpression = SPEC.AssignmentExpression = {};
  var BinaryExpression = SPEC.BinaryExpression = {};
  var CallExpression = SPEC.CallExpression = {};
  var ComputedMemberExpression = SPEC.ComputedMemberExpression = {};
  var ConditionalExpression = SPEC.ConditionalExpression = {};
  var FunctionExpression = SPEC.FunctionExpression = {};
  var IdentifierExpression = SPEC.IdentifierExpression = {};
  var NewExpression = SPEC.NewExpression = {};
  var NewTargetExpression = SPEC.NewTargetExpression = {};
  var ObjectExpression = SPEC.ObjectExpression = {};
  var PostfixExpression = SPEC.PostfixExpression = {};
  var PrefixExpression = SPEC.PrefixExpression = {};
  var StaticMemberExpression = SPEC.StaticMemberExpression = {};
  var TemplateExpression = SPEC.TemplateExpression = {};
  var ThisExpression = SPEC.ThisExpression = {};
  var YieldExpression = SPEC.YieldExpression = {};
  var YieldGeneratorExpression = SPEC.YieldGeneratorExpression = {};
  var BlockStatement = SPEC.BlockStatement = {};
  var BreakStatement = SPEC.BreakStatement = {};
  var ContinueStatement = SPEC.ContinueStatement = {};
  var DebuggerStatement = SPEC.DebuggerStatement = {};
  var DoWhileStatement = SPEC.DoWhileStatement = {};
  var EmptyStatement = SPEC.EmptyStatement = {};
  var ExpressionStatement = SPEC.ExpressionStatement = {};
  var ForInStatement = SPEC.ForInStatement = {};
  var ForOfStatement = SPEC.ForOfStatement = {};
  var ForStatement = SPEC.ForStatement = {};
  var IfStatement = SPEC.IfStatement = {};
  var LabeledStatement = SPEC.LabeledStatement = {};
  var ReturnStatement = SPEC.ReturnStatement = {};
  var SwitchStatement = SPEC.SwitchStatement = {};
  var SwitchStatementWithDefault = SPEC.SwitchStatementWithDefault = {};
  var ThrowStatement = SPEC.ThrowStatement = {};
  var TryCatchStatement = SPEC.TryCatchStatement = {};
  var TryFinallyStatement = SPEC.TryFinallyStatement = {};
  var VariableDeclarationStatement = SPEC.VariableDeclarationStatement = {};
  var WhileStatement = SPEC.WhileStatement = {};
  var WithStatement = SPEC.WithStatement = {};
  var Block = SPEC.Block = {};
  var CatchClause = SPEC.CatchClause = {};
  var Directive = SPEC.Directive = {};
  var FormalParameters = SPEC.FormalParameters = {};
  var FunctionBody = SPEC.FunctionBody = {};
  var FunctionDeclaration = SPEC.FunctionDeclaration = {};
  var Script = SPEC.Script = {};
  var SpreadElement = SPEC.SpreadElement = {};
  var Super = SPEC.Super = {};
  var SwitchCase = SPEC.SwitchCase = {};
  var SwitchDefault = SPEC.SwitchDefault = {};
  var TemplateElement = SPEC.TemplateElement = {};
  var VariableDeclaration = SPEC.VariableDeclaration = {};
  var VariableDeclarator = SPEC.VariableDeclarator = {};

  var Class = Union(ClassExpression, ClassDeclaration);
  var BindingProperty = Union(BindingPropertyIdentifier, BindingPropertyProperty);
  var ExportDeclaration = Union(ExportAllFrom, ExportFrom, Export, ExportDefault);
  var ImportDeclaration = Union(Import, ImportNamespace);
  var MethodDefinition = Union(Method, Getter, Setter);
  var NamedObjectProperty = Union(MethodDefinition, DataProperty);
  var ObjectProperty = Union(NamedObjectProperty, ShorthandProperty);
  var PropertyName = Union(ComputedPropertyName, StaticPropertyName);
  var MemberExpression = Union(ComputedMemberExpression, StaticMemberExpression);
  var UnaryExpression = Union(PostfixExpression, PrefixExpression);
  var Expression = Union(UnaryExpression, MemberExpression, ClassExpression, LiteralBooleanExpression, LiteralInfinityExpression, LiteralNullExpression, LiteralNumericExpression, LiteralRegExpExpression, LiteralStringExpression, ArrayExpression, ArrowExpression, AssignmentExpression, BinaryExpression, CallExpression, ConditionalExpression, FunctionExpression, IdentifierExpression, NewExpression, NewTargetExpression, ObjectExpression, TemplateExpression, ThisExpression, YieldExpression, YieldGeneratorExpression);
  var IterationStatement = Union(DoWhileStatement, ForInStatement, ForOfStatement, ForStatement, WhileStatement);
  var Statement = Union(IterationStatement, ClassDeclaration, BlockStatement, BreakStatement, ContinueStatement, DebuggerStatement, EmptyStatement, ExpressionStatement, IfStatement, LabeledStatement, ReturnStatement, SwitchStatement, SwitchStatementWithDefault, ThrowStatement, TryCatchStatement, TryFinallyStatement, VariableDeclarationStatement, WithStatement, FunctionDeclaration);
  var Node = Union(Statement, Expression, PropertyName, ObjectProperty, ImportDeclaration, ExportDeclaration, BindingWithDefault, BindingIdentifier, ArrayBinding, ObjectBinding, BindingProperty, ClassElement, Module, ImportSpecifier, ExportSpecifier, Block, CatchClause, Directive, FormalParameters, FunctionBody, Script, SpreadElement, Super, SwitchCase, SwitchDefault, TemplateElement, VariableDeclaration, VariableDeclarator);
  var Function = Union(FunctionExpression, FunctionDeclaration);

  SourceLocation.typeName = "SourceLocation";
  SourceLocation.fields = [
    { name: "line", type: DOUBLE },
    { name: "column", type: DOUBLE },
    { name: "offset", type: DOUBLE },
  ];

  SourceSpan.typeName = "SourceSpan";
  SourceSpan.fields = [
    { name: "source", type: Maybe(STRING) },
    { name: "start", type: SourceLocation },
    { name: "end", type: SourceLocation },
  ];

  BindingWithDefault.typeName = "BindingWithDefault";
  BindingWithDefault.fields = [
    { name: "type", value: "BindingWithDefault" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "binding", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "init", type: Expression },
  ];

  BindingIdentifier.typeName = "BindingIdentifier";
  BindingIdentifier.fields = [
    { name: "type", value: "BindingIdentifier" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: STRING },
  ];

  ArrayBinding.typeName = "ArrayBinding";
  ArrayBinding.fields = [
    { name: "type", value: "ArrayBinding" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "elements", type: List(Maybe(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault))) },
    { name: "restElement", type: Maybe(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression)) },
  ];

  ObjectBinding.typeName = "ObjectBinding";
  ObjectBinding.fields = [
    { name: "type", value: "ObjectBinding" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "properties", type: List(BindingProperty) },
  ];

  BindingPropertyIdentifier.typeName = "BindingPropertyIdentifier";
  BindingPropertyIdentifier.fields = [
    { name: "type", value: "BindingPropertyIdentifier" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "binding", type: BindingIdentifier },
    { name: "init", type: Maybe(Expression) },
  ];

  BindingPropertyProperty.typeName = "BindingPropertyProperty";
  BindingPropertyProperty.fields = [
    { name: "type", value: "BindingPropertyProperty" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: PropertyName },
    { name: "binding", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault) },
  ];

  ClassExpression.typeName = "ClassExpression";
  ClassExpression.fields = [
    { name: "type", value: "ClassExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: Maybe(BindingIdentifier) },
    { name: "super", type: Maybe(Expression) },
    { name: "elements", type: List(ClassElement) },
  ];

  ClassDeclaration.typeName = "ClassDeclaration";
  ClassDeclaration.fields = [
    { name: "type", value: "ClassDeclaration" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: BindingIdentifier },
    { name: "super", type: Maybe(Expression) },
    { name: "elements", type: List(ClassElement) },
  ];

  ClassElement.typeName = "ClassElement";
  ClassElement.fields = [
    { name: "type", value: "ClassElement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "isStatic", type: BOOLEAN },
    { name: "method", type: MethodDefinition },
  ];

  Module.typeName = "Module";
  Module.fields = [
    { name: "type", value: "Module" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "items", type: List(Union(ImportDeclaration, ExportDeclaration, Statement)) },
  ];

  Import.typeName = "Import";
  Import.fields = [
    { name: "type", value: "Import" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "moduleSpecifier", type: STRING },
    { name: "defaultBinding", type: Maybe(BindingIdentifier) },
    { name: "namedImports", type: List(ImportSpecifier) },
  ];

  ImportNamespace.typeName = "ImportNamespace";
  ImportNamespace.fields = [
    { name: "type", value: "ImportNamespace" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "moduleSpecifier", type: STRING },
    { name: "defaultBinding", type: Maybe(BindingIdentifier) },
    { name: "namespaceBinding", type: BindingIdentifier },
  ];

  ImportSpecifier.typeName = "ImportSpecifier";
  ImportSpecifier.fields = [
    { name: "type", value: "ImportSpecifier" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: Maybe(STRING) },
    { name: "binding", type: BindingIdentifier },
  ];

  ExportAllFrom.typeName = "ExportAllFrom";
  ExportAllFrom.fields = [
    { name: "type", value: "ExportAllFrom" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "moduleSpecifier", type: STRING },
  ];

  ExportFrom.typeName = "ExportFrom";
  ExportFrom.fields = [
    { name: "type", value: "ExportFrom" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "namedExports", type: List(ExportSpecifier) },
    { name: "moduleSpecifier", type: Maybe(STRING) },
  ];

  Export.typeName = "Export";
  Export.fields = [
    { name: "type", value: "Export" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "declaration", type: Union(FunctionDeclaration, ClassDeclaration, VariableDeclaration) },
  ];

  ExportDefault.typeName = "ExportDefault";
  ExportDefault.fields = [
    { name: "type", value: "ExportDefault" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "body", type: Union(FunctionDeclaration, ClassDeclaration, Expression) },
  ];

  ExportSpecifier.typeName = "ExportSpecifier";
  ExportSpecifier.fields = [
    { name: "type", value: "ExportSpecifier" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: Maybe(STRING) },
    { name: "exportedName", type: STRING },
  ];

  Method.typeName = "Method";
  Method.fields = [
    { name: "type", value: "Method" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: PropertyName },
    { name: "isGenerator", type: BOOLEAN },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody },
  ];

  Getter.typeName = "Getter";
  Getter.fields = [
    { name: "type", value: "Getter" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: PropertyName },
    { name: "body", type: FunctionBody },
  ];

  Setter.typeName = "Setter";
  Setter.fields = [
    { name: "type", value: "Setter" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: PropertyName },
    { name: "param", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "body", type: FunctionBody },
  ];

  DataProperty.typeName = "DataProperty";
  DataProperty.fields = [
    { name: "type", value: "DataProperty" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: PropertyName },
    { name: "expression", type: Expression },
  ];

  ShorthandProperty.typeName = "ShorthandProperty";
  ShorthandProperty.fields = [
    { name: "type", value: "ShorthandProperty" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: STRING },
  ];

  ComputedPropertyName.typeName = "ComputedPropertyName";
  ComputedPropertyName.fields = [
    { name: "type", value: "ComputedPropertyName" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Expression },
  ];

  StaticPropertyName.typeName = "StaticPropertyName";
  StaticPropertyName.fields = [
    { name: "type", value: "StaticPropertyName" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "value", type: STRING },
  ];

  LiteralBooleanExpression.typeName = "LiteralBooleanExpression";
  LiteralBooleanExpression.fields = [
    { name: "type", value: "LiteralBooleanExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "value", type: BOOLEAN },
  ];

  LiteralInfinityExpression.typeName = "LiteralInfinityExpression";
  LiteralInfinityExpression.fields = [
    { name: "type", value: "LiteralInfinityExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  LiteralNullExpression.typeName = "LiteralNullExpression";
  LiteralNullExpression.fields = [
    { name: "type", value: "LiteralNullExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  LiteralNumericExpression.typeName = "LiteralNumericExpression";
  LiteralNumericExpression.fields = [
    { name: "type", value: "LiteralNumericExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "value", type: DOUBLE },
  ];

  LiteralRegExpExpression.typeName = "LiteralRegExpExpression";
  LiteralRegExpExpression.fields = [
    { name: "type", value: "LiteralRegExpExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "pattern", type: STRING },
    { name: "flags", type: STRING },
  ];

  LiteralStringExpression.typeName = "LiteralStringExpression";
  LiteralStringExpression.fields = [
    { name: "type", value: "LiteralStringExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "value", type: STRING },
  ];

  ArrayExpression.typeName = "ArrayExpression";
  ArrayExpression.fields = [
    { name: "type", value: "ArrayExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "elements", type: List(Maybe(Union(SpreadElement, Expression))) },
  ];

  ArrowExpression.typeName = "ArrowExpression";
  ArrowExpression.fields = [
    { name: "type", value: "ArrowExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "params", type: FormalParameters },
    { name: "body", type: Union(FunctionBody, Expression) },
  ];

  AssignmentExpression.typeName = "AssignmentExpression";
  AssignmentExpression.fields = [
    { name: "type", value: "AssignmentExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "operator", type: AssignmentOperator },
    { name: "binding", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "expression", type: Expression },
  ];

  BinaryExpression.typeName = "BinaryExpression";
  BinaryExpression.fields = [
    { name: "type", value: "BinaryExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "operator", type: BinaryOperator },
    { name: "left", type: Expression },
    { name: "right", type: Expression },
  ];

  CallExpression.typeName = "CallExpression";
  CallExpression.fields = [
    { name: "type", value: "CallExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "callee", type: Union(Expression, Super) },
    { name: "arguments", type: List(Union(SpreadElement, Expression)) },
  ];

  ComputedMemberExpression.typeName = "ComputedMemberExpression";
  ComputedMemberExpression.fields = [
    { name: "type", value: "ComputedMemberExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "object", type: Union(Expression, Super) },
    { name: "expression", type: Expression },
  ];

  ConditionalExpression.typeName = "ConditionalExpression";
  ConditionalExpression.fields = [
    { name: "type", value: "ConditionalExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "test", type: Expression },
    { name: "consequent", type: Expression },
    { name: "alternate", type: Expression },
  ];

  FunctionExpression.typeName = "FunctionExpression";
  FunctionExpression.fields = [
    { name: "isGenerator", type: BOOLEAN },
    { name: "type", value: "FunctionExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: Maybe(BindingIdentifier) },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody },
  ];

  IdentifierExpression.typeName = "IdentifierExpression";
  IdentifierExpression.fields = [
    { name: "type", value: "IdentifierExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: STRING },
  ];

  NewExpression.typeName = "NewExpression";
  NewExpression.fields = [
    { name: "type", value: "NewExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "callee", type: Expression },
    { name: "arguments", type: List(Union(SpreadElement, Expression)) },
  ];

  NewTargetExpression.typeName = "NewTargetExpression";
  NewTargetExpression.fields = [
    { name: "type", value: "NewTargetExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  ObjectExpression.typeName = "ObjectExpression";
  ObjectExpression.fields = [
    { name: "type", value: "ObjectExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "properties", type: List(ObjectProperty) },
  ];

  PostfixExpression.typeName = "PostfixExpression";
  PostfixExpression.fields = [
    { name: "type", value: "PostfixExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "operand", type: Expression },
    { name: "operator", type: PostfixOperator },
  ];

  PrefixExpression.typeName = "PrefixExpression";
  PrefixExpression.fields = [
    { name: "type", value: "PrefixExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "operand", type: Expression },
    { name: "operator", type: PrefixOperator },
  ];

  StaticMemberExpression.typeName = "StaticMemberExpression";
  StaticMemberExpression.fields = [
    { name: "type", value: "StaticMemberExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "object", type: Union(Expression, Super) },
    { name: "property", type: STRING },
  ];

  TemplateExpression.typeName = "TemplateExpression";
  TemplateExpression.fields = [
    { name: "type", value: "TemplateExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "tag", type: Maybe(Expression) },
    { name: "elements", type: List(Union(Expression, TemplateElement)) },
  ];

  ThisExpression.typeName = "ThisExpression";
  ThisExpression.fields = [
    { name: "type", value: "ThisExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  YieldExpression.typeName = "YieldExpression";
  YieldExpression.fields = [
    { name: "type", value: "YieldExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Maybe(Expression) },
  ];

  YieldGeneratorExpression.typeName = "YieldGeneratorExpression";
  YieldGeneratorExpression.fields = [
    { name: "type", value: "YieldGeneratorExpression" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Expression },
  ];

  BlockStatement.typeName = "BlockStatement";
  BlockStatement.fields = [
    { name: "type", value: "BlockStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "block", type: Block },
  ];

  BreakStatement.typeName = "BreakStatement";
  BreakStatement.fields = [
    { name: "type", value: "BreakStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "label", type: Maybe(STRING) },
  ];

  ContinueStatement.typeName = "ContinueStatement";
  ContinueStatement.fields = [
    { name: "type", value: "ContinueStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "label", type: Maybe(STRING) },
  ];

  DebuggerStatement.typeName = "DebuggerStatement";
  DebuggerStatement.fields = [
    { name: "type", value: "DebuggerStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  DoWhileStatement.typeName = "DoWhileStatement";
  DoWhileStatement.fields = [
    { name: "type", value: "DoWhileStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "body", type: Statement },
    { name: "test", type: Expression },
  ];

  EmptyStatement.typeName = "EmptyStatement";
  EmptyStatement.fields = [
    { name: "type", value: "EmptyStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  ExpressionStatement.typeName = "ExpressionStatement";
  ExpressionStatement.fields = [
    { name: "type", value: "ExpressionStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Expression },
  ];

  ForInStatement.typeName = "ForInStatement";
  ForInStatement.fields = [
    { name: "type", value: "ForInStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "left", type: Union(VariableDeclaration, ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "right", type: Expression },
    { name: "body", type: Statement },
  ];

  ForOfStatement.typeName = "ForOfStatement";
  ForOfStatement.fields = [
    { name: "type", value: "ForOfStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "left", type: Union(VariableDeclaration, ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "right", type: Expression },
    { name: "body", type: Statement },
  ];

  ForStatement.typeName = "ForStatement";
  ForStatement.fields = [
    { name: "type", value: "ForStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "init", type: Maybe(Union(VariableDeclaration, Expression)) },
    { name: "test", type: Maybe(Expression) },
    { name: "update", type: Maybe(Expression) },
    { name: "body", type: Statement },
  ];

  IfStatement.typeName = "IfStatement";
  IfStatement.fields = [
    { name: "type", value: "IfStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "test", type: Expression },
    { name: "consequent", type: Statement },
    { name: "alternate", type: Maybe(Statement) },
  ];

  LabeledStatement.typeName = "LabeledStatement";
  LabeledStatement.fields = [
    { name: "type", value: "LabeledStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "label", type: STRING },
    { name: "body", type: Statement },
  ];

  ReturnStatement.typeName = "ReturnStatement";
  ReturnStatement.fields = [
    { name: "type", value: "ReturnStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Maybe(Expression) },
  ];

  SwitchStatement.typeName = "SwitchStatement";
  SwitchStatement.fields = [
    { name: "type", value: "SwitchStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "discriminant", type: Expression },
    { name: "cases", type: List(SwitchCase) },
  ];

  SwitchStatementWithDefault.typeName = "SwitchStatementWithDefault";
  SwitchStatementWithDefault.fields = [
    { name: "type", value: "SwitchStatementWithDefault" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "discriminant", type: Expression },
    { name: "preDefaultCases", type: List(SwitchCase) },
    { name: "defaultCase", type: SwitchDefault },
    { name: "postDefaultCases", type: List(SwitchCase) },
  ];

  ThrowStatement.typeName = "ThrowStatement";
  ThrowStatement.fields = [
    { name: "type", value: "ThrowStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Expression },
  ];

  TryCatchStatement.typeName = "TryCatchStatement";
  TryCatchStatement.fields = [
    { name: "type", value: "TryCatchStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "body", type: Block },
    { name: "catchClause", type: CatchClause },
  ];

  TryFinallyStatement.typeName = "TryFinallyStatement";
  TryFinallyStatement.fields = [
    { name: "type", value: "TryFinallyStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "body", type: Block },
    { name: "catchClause", type: Maybe(CatchClause) },
    { name: "finalizer", type: Block },
  ];

  VariableDeclarationStatement.typeName = "VariableDeclarationStatement";
  VariableDeclarationStatement.fields = [
    { name: "type", value: "VariableDeclarationStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "declaration", type: VariableDeclaration },
  ];

  WhileStatement.typeName = "WhileStatement";
  WhileStatement.fields = [
    { name: "type", value: "WhileStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "test", type: Expression },
    { name: "body", type: Statement },
  ];

  WithStatement.typeName = "WithStatement";
  WithStatement.fields = [
    { name: "type", value: "WithStatement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "object", type: Expression },
    { name: "body", type: Statement },
  ];

  Block.typeName = "Block";
  Block.fields = [
    { name: "type", value: "Block" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "statements", type: List(Statement) },
  ];

  CatchClause.typeName = "CatchClause";
  CatchClause.fields = [
    { name: "type", value: "CatchClause" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "binding", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "body", type: Block },
  ];

  Directive.typeName = "Directive";
  Directive.fields = [
    { name: "type", value: "Directive" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "rawValue", type: STRING },
  ];

  FormalParameters.typeName = "FormalParameters";
  FormalParameters.fields = [
    { name: "type", value: "FormalParameters" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "items", type: List(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault)) },
    { name: "rest", type: Maybe(BindingIdentifier) },
  ];

  FunctionBody.typeName = "FunctionBody";
  FunctionBody.fields = [
    { name: "type", value: "FunctionBody" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "directives", type: List(Directive) },
    { name: "statements", type: List(Statement) },
  ];

  FunctionDeclaration.typeName = "FunctionDeclaration";
  FunctionDeclaration.fields = [
    { name: "isGenerator", type: BOOLEAN },
    { name: "type", value: "FunctionDeclaration" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "name", type: BindingIdentifier },
    { name: "params", type: FormalParameters },
    { name: "body", type: FunctionBody },
  ];

  Script.typeName = "Script";
  Script.fields = [
    { name: "type", value: "Script" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "body", type: FunctionBody },
  ];

  SpreadElement.typeName = "SpreadElement";
  SpreadElement.fields = [
    { name: "type", value: "SpreadElement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "expression", type: Expression },
  ];

  Super.typeName = "Super";
  Super.fields = [
    { name: "type", value: "Super" },
    { name: "loc", type: Maybe(SourceSpan) },
  ];

  SwitchCase.typeName = "SwitchCase";
  SwitchCase.fields = [
    { name: "type", value: "SwitchCase" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "test", type: Expression },
    { name: "consequent", type: List(Statement) },
  ];

  SwitchDefault.typeName = "SwitchDefault";
  SwitchDefault.fields = [
    { name: "type", value: "SwitchDefault" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "consequent", type: List(Statement) },
  ];

  TemplateElement.typeName = "TemplateElement";
  TemplateElement.fields = [
    { name: "type", value: "TemplateElement" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "rawValue", type: STRING },
  ];

  VariableDeclaration.typeName = "VariableDeclaration";
  VariableDeclaration.fields = [
    { name: "type", value: "VariableDeclaration" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "kind", type: VariableDeclarationKind },
    { name: "declarators", type: List(VariableDeclarator) },
  ];

  VariableDeclarator.typeName = "VariableDeclarator";
  VariableDeclarator.fields = [
    { name: "type", value: "VariableDeclarator" },
    { name: "loc", type: Maybe(SourceSpan) },
    { name: "binding", type: Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression) },
    { name: "init", type: Maybe(Expression) },
  ];

  return SPEC;
}());
