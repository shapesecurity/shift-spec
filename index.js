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

  var BOOLEAN = { type: "Boolean" };
  var DOUBLE = { type: "Number" };
  var STRING = { type: "String" };

  function Maybe(arg) { return { type: "Maybe", argument: arg }; }

  function List(arg) { return { type: "List", argument: arg }; }

  function Union() { return { type: "Union", arguments: [].slice.call(arguments, 0) }; }


  var VariableDeclarationKind = {
    type: "Enum",
    values: ["var", "let", "const"]
  };

  var AssignmentOperator = {
    type: "Enum",
    values: ["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "|=", "^=", "&="]
  };

  var BinaryOperator = {
    type: "Enum",
    values: ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "in", "instanceof", "<<", ">>", ">>>", "+", "-", "*", "/", "%", ",", "||", "&&", "|", "^", "&"]
  };

  var PrefixOperator = {
    type: "Enum",
    values: ["+", "-", "!", "~", "typeof", "void", "delete", "++", "--"]
  };

  var PostfixOperator = {
    type: "Enum",
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
  var Statement = Union(ClassDeclaration, BlockStatement, BreakStatement, ContinueStatement, DebuggerStatement, EmptyStatement, ExpressionStatement, IfStatement, LabeledStatement, ReturnStatement, SwitchStatement, SwitchStatementWithDefault, ThrowStatement, TryCatchStatement, TryFinallyStatement, VariableDeclarationStatement, WithStatement, FunctionDeclaration);
  var Node = Union(Statement, IterationStatement, Expression, PropertyName, ObjectProperty, ImportDeclaration, ExportDeclaration, BindingWithDefault, BindingIdentifier, ArrayBinding, ObjectBinding, BindingProperty, ClassElement, Module, ImportSpecifier, ExportSpecifier, Block, CatchClause, Directive, FunctionBody, Script, SpreadElement, Super, SwitchCase, SwitchDefault, TemplateElement, VariableDeclaration, VariableDeclarator);

  SourceLocation.line = DOUBLE;
  SourceLocation.column = DOUBLE;
  SourceLocation.offset = DOUBLE;

  SourceSpan.source = Maybe(STRING);
  SourceSpan.start = SourceLocation;
  SourceSpan.end = SourceLocation;

  BindingWithDefault.type = "BindingWithDefault";
  BindingWithDefault.binding = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  BindingWithDefault.init = Expression;
  BindingWithDefault.loc = Maybe(SourceSpan);

  BindingIdentifier.type = "BindingIdentifier";
  BindingIdentifier.name = STRING;
  BindingIdentifier.loc = Maybe(SourceSpan);

  ArrayBinding.type = "ArrayBinding";
  ArrayBinding.elements = List(Maybe(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault)));
  ArrayBinding.restElement = Maybe(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression));
  ArrayBinding.loc = Maybe(SourceSpan);

  ObjectBinding.type = "ObjectBinding";
  ObjectBinding.properties = List(BindingProperty);
  ObjectBinding.loc = Maybe(SourceSpan);

  BindingPropertyIdentifier.type = "BindingPropertyIdentifier";
  BindingPropertyIdentifier.binding = BindingIdentifier;
  BindingPropertyIdentifier.init = Maybe(Expression);
  BindingPropertyIdentifier.loc = Maybe(SourceSpan);

  BindingPropertyProperty.type = "BindingPropertyProperty";
  BindingPropertyProperty.name = PropertyName;
  BindingPropertyProperty.binding = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault);
  BindingPropertyProperty.loc = Maybe(SourceSpan);

  ClassExpression.type = "ClassExpression";
  ClassExpression.super = Maybe(Expression);
  ClassExpression.elements = List(ClassElement);
  ClassExpression.name = Maybe(BindingIdentifier);
  ClassExpression.loc = Maybe(SourceSpan);

  ClassDeclaration.type = "ClassDeclaration";
  ClassDeclaration.super = Maybe(Expression);
  ClassDeclaration.elements = List(ClassElement);
  ClassDeclaration.name = BindingIdentifier;
  ClassDeclaration.loc = Maybe(SourceSpan);

  ClassElement.type = "ClassElement";
  ClassElement.isStatic = BOOLEAN;
  ClassElement.method = MethodDefinition;
  ClassElement.loc = Maybe(SourceSpan);

  Module.type = "Module";
  Module.items = List(Union(ImportDeclaration, ExportDeclaration, Statement));
  Module.loc = Maybe(SourceSpan);

  Import.type = "Import";
  Import.moduleSpecifier = STRING;
  Import.defaultBinding = Maybe(BindingIdentifier);
  Import.namedImports = List(ImportSpecifier);
  Import.loc = Maybe(SourceSpan);

  ImportNamespace.type = "ImportNamespace";
  ImportNamespace.moduleSpecifier = STRING;
  ImportNamespace.defaultBinding = Maybe(BindingIdentifier);
  ImportNamespace.namespaceBinding = BindingIdentifier;
  ImportNamespace.loc = Maybe(SourceSpan);

  ImportSpecifier.type = "ImportSpecifier";
  ImportSpecifier.name = Maybe(STRING);
  ImportSpecifier.binding = BindingIdentifier;
  ImportSpecifier.loc = Maybe(SourceSpan);

  ExportAllFrom.type = "ExportAllFrom";
  ExportAllFrom.moduleSpecifier = STRING;
  ExportAllFrom.loc = Maybe(SourceSpan);

  ExportFrom.type = "ExportFrom";
  ExportFrom.namedExports = List(ExportSpecifier);
  ExportFrom.moduleSpecifier = Maybe(STRING);
  ExportFrom.loc = Maybe(SourceSpan);

  Export.type = "Export";
  Export.declaration = Union(FunctionDeclaration, ClassDeclaration, VariableDeclaration);
  Export.loc = Maybe(SourceSpan);

  ExportDefault.type = "ExportDefault";
  ExportDefault.body = Union(FunctionDeclaration, ClassDeclaration, Expression);
  ExportDefault.loc = Maybe(SourceSpan);

  ExportSpecifier.type = "ExportSpecifier";
  ExportSpecifier.name = Maybe(STRING);
  ExportSpecifier.exportedName = STRING;
  ExportSpecifier.loc = Maybe(SourceSpan);

  Method.type = "Method";
  Method.name = PropertyName;
  Method.body = FunctionBody;
  Method.isGenerator = BOOLEAN;
  Method.params = FormalParameters;
  Method.loc = Maybe(SourceSpan);

  Getter.type = "Getter";
  Getter.name = PropertyName;
  Getter.body = FunctionBody;
  Getter.loc = Maybe(SourceSpan);

  Setter.type = "Setter";
  Setter.name = PropertyName;
  Setter.body = FunctionBody;
  Setter.param = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  Setter.loc = Maybe(SourceSpan);

  DataProperty.type = "DataProperty";
  DataProperty.name = PropertyName;
  DataProperty.expression = Expression;
  DataProperty.loc = Maybe(SourceSpan);

  ShorthandProperty.type = "ShorthandProperty";
  ShorthandProperty.name = STRING;
  ShorthandProperty.loc = Maybe(SourceSpan);

  ComputedPropertyName.type = "ComputedPropertyName";
  ComputedPropertyName.expression = Expression;
  ComputedPropertyName.loc = Maybe(SourceSpan);

  StaticPropertyName.type = "StaticPropertyName";
  StaticPropertyName.value = STRING;
  StaticPropertyName.loc = Maybe(SourceSpan);

  LiteralBooleanExpression.type = "LiteralBooleanExpression";
  LiteralBooleanExpression.value = BOOLEAN;
  LiteralBooleanExpression.loc = Maybe(SourceSpan);

  LiteralInfinityExpression.type = "LiteralInfinityExpression";
  LiteralInfinityExpression.loc = Maybe(SourceSpan);

  LiteralNullExpression.type = "LiteralNullExpression";
  LiteralNullExpression.loc = Maybe(SourceSpan);

  LiteralNumericExpression.type = "LiteralNumericExpression";
  LiteralNumericExpression.value = DOUBLE;
  LiteralNumericExpression.loc = Maybe(SourceSpan);

  LiteralRegExpExpression.type = "LiteralRegExpExpression";
  LiteralRegExpExpression.pattern = STRING;
  LiteralRegExpExpression.flags = STRING;
  LiteralRegExpExpression.loc = Maybe(SourceSpan);

  LiteralStringExpression.type = "LiteralStringExpression";
  LiteralStringExpression.value = STRING;
  LiteralStringExpression.loc = Maybe(SourceSpan);

  ArrayExpression.type = "ArrayExpression";
  ArrayExpression.elements = List(Maybe(Union(SpreadElement, Expression)));
  ArrayExpression.loc = Maybe(SourceSpan);

  ArrowExpression.type = "ArrowExpression";
  ArrowExpression.params = FormalParameters;
  ArrowExpression.body = Union(FunctionBody, Expression);
  ArrowExpression.loc = Maybe(SourceSpan);

  AssignmentExpression.type = "AssignmentExpression";
  AssignmentExpression.operator = AssignmentOperator;
  AssignmentExpression.binding = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  AssignmentExpression.expression = Expression;
  AssignmentExpression.loc = Maybe(SourceSpan);

  BinaryExpression.type = "BinaryExpression";
  BinaryExpression.operator = BinaryOperator;
  BinaryExpression.left = Expression;
  BinaryExpression.right = Expression;
  BinaryExpression.loc = Maybe(SourceSpan);

  CallExpression.type = "CallExpression";
  CallExpression.callee = Union(Expression, Super);
  CallExpression.arguments = List(Union(SpreadElement, Expression));
  CallExpression.loc = Maybe(SourceSpan);

  ComputedMemberExpression.type = "ComputedMemberExpression";
  ComputedMemberExpression.object = Union(Expression, Super);
  ComputedMemberExpression.expression = Expression;
  ComputedMemberExpression.loc = Maybe(SourceSpan);

  ConditionalExpression.type = "ConditionalExpression";
  ConditionalExpression.test = Expression;
  ConditionalExpression.consequent = Expression;
  ConditionalExpression.alternate = Expression;
  ConditionalExpression.loc = Maybe(SourceSpan);

  FunctionExpression.type = "FunctionExpression";
  FunctionExpression.isGenerator = BOOLEAN;
  FunctionExpression.name = Maybe(BindingIdentifier);
  FunctionExpression.params = FormalParameters;
  FunctionExpression.body = FunctionBody;
  FunctionExpression.loc = Maybe(SourceSpan);

  IdentifierExpression.type = "IdentifierExpression";
  IdentifierExpression.name = STRING;
  IdentifierExpression.loc = Maybe(SourceSpan);

  NewExpression.type = "NewExpression";
  NewExpression.callee = Expression;
  NewExpression.arguments = List(Union(SpreadElement, Expression));
  NewExpression.loc = Maybe(SourceSpan);

  NewTargetExpression.type = "NewTargetExpression";
  NewTargetExpression.loc = Maybe(SourceSpan);

  ObjectExpression.type = "ObjectExpression";
  ObjectExpression.properties = List(ObjectProperty);
  ObjectExpression.loc = Maybe(SourceSpan);

  PostfixExpression.type = "PostfixExpression";
  PostfixExpression.operand = Expression;
  PostfixExpression.operator = PostfixOperator;
  PostfixExpression.loc = Maybe(SourceSpan);

  PrefixExpression.type = "PrefixExpression";
  PrefixExpression.operand = Expression;
  PrefixExpression.operator = PrefixOperator;
  PrefixExpression.loc = Maybe(SourceSpan);

  StaticMemberExpression.type = "StaticMemberExpression";
  StaticMemberExpression.object = Union(Expression, Super);
  StaticMemberExpression.property = STRING;
  StaticMemberExpression.loc = Maybe(SourceSpan);

  TemplateExpression.type = "TemplateExpression";
  TemplateExpression.tag = Maybe(Expression);
  TemplateExpression.elements = List(Union(Expression, TemplateElement));
  TemplateExpression.loc = Maybe(SourceSpan);

  ThisExpression.type = "ThisExpression";
  ThisExpression.loc = Maybe(SourceSpan);

  YieldExpression.type = "YieldExpression";
  YieldExpression.expression = Maybe(Expression);
  YieldExpression.loc = Maybe(SourceSpan);

  YieldGeneratorExpression.type = "YieldGeneratorExpression";
  YieldGeneratorExpression.expression = Expression;
  YieldGeneratorExpression.loc = Maybe(SourceSpan);

  BlockStatement.type = "BlockStatement";
  BlockStatement.block = Block;
  BlockStatement.loc = Maybe(SourceSpan);

  BreakStatement.type = "BreakStatement";
  BreakStatement.label = Maybe(STRING);
  BreakStatement.loc = Maybe(SourceSpan);

  ContinueStatement.type = "ContinueStatement";
  ContinueStatement.label = Maybe(STRING);
  ContinueStatement.loc = Maybe(SourceSpan);

  DebuggerStatement.type = "DebuggerStatement";
  DebuggerStatement.loc = Maybe(SourceSpan);

  DoWhileStatement.type = "DoWhileStatement";
  DoWhileStatement.body = Statement;
  DoWhileStatement.test = Expression;
  DoWhileStatement.loc = Maybe(SourceSpan);

  EmptyStatement.type = "EmptyStatement";
  EmptyStatement.loc = Maybe(SourceSpan);

  ExpressionStatement.type = "ExpressionStatement";
  ExpressionStatement.expression = Expression;
  ExpressionStatement.loc = Maybe(SourceSpan);

  ForInStatement.type = "ForInStatement";
  ForInStatement.body = Statement;
  ForInStatement.left = Union(VariableDeclaration, ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  ForInStatement.right = Expression;
  ForInStatement.loc = Maybe(SourceSpan);

  ForOfStatement.type = "ForOfStatement";
  ForOfStatement.body = Statement;
  ForOfStatement.left = Union(VariableDeclaration, ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  ForOfStatement.right = Expression;
  ForOfStatement.loc = Maybe(SourceSpan);

  ForStatement.type = "ForStatement";
  ForStatement.body = Statement;
  ForStatement.init = Maybe(Union(VariableDeclaration, Expression));
  ForStatement.test = Maybe(Expression);
  ForStatement.update = Maybe(Expression);
  ForStatement.loc = Maybe(SourceSpan);

  IfStatement.type = "IfStatement";
  IfStatement.test = Expression;
  IfStatement.consequent = Statement;
  IfStatement.alternate = Maybe(Statement);
  IfStatement.loc = Maybe(SourceSpan);

  LabeledStatement.type = "LabeledStatement";
  LabeledStatement.label = STRING;
  LabeledStatement.body = Statement;
  LabeledStatement.loc = Maybe(SourceSpan);

  ReturnStatement.type = "ReturnStatement";
  ReturnStatement.expression = Maybe(Expression);
  ReturnStatement.loc = Maybe(SourceSpan);

  SwitchStatement.type = "SwitchStatement";
  SwitchStatement.discriminant = Expression;
  SwitchStatement.cases = List(SwitchCase);
  SwitchStatement.loc = Maybe(SourceSpan);

  SwitchStatementWithDefault.type = "SwitchStatementWithDefault";
  SwitchStatementWithDefault.discriminant = Expression;
  SwitchStatementWithDefault.preDefaultCases = List(SwitchCase);
  SwitchStatementWithDefault.defaultCase = SwitchDefault;
  SwitchStatementWithDefault.postDefaultCases = List(SwitchCase);
  SwitchStatementWithDefault.loc = Maybe(SourceSpan);

  ThrowStatement.type = "ThrowStatement";
  ThrowStatement.expression = Expression;
  ThrowStatement.loc = Maybe(SourceSpan);

  TryCatchStatement.type = "TryCatchStatement";
  TryCatchStatement.body = Block;
  TryCatchStatement.catchClause = CatchClause;
  TryCatchStatement.loc = Maybe(SourceSpan);

  TryFinallyStatement.type = "TryFinallyStatement";
  TryFinallyStatement.body = Block;
  TryFinallyStatement.catchClause = Maybe(CatchClause);
  TryFinallyStatement.finalizer = Block;
  TryFinallyStatement.loc = Maybe(SourceSpan);

  VariableDeclarationStatement.type = "VariableDeclarationStatement";
  VariableDeclarationStatement.declaration = VariableDeclaration;
  VariableDeclarationStatement.loc = Maybe(SourceSpan);

  WhileStatement.type = "WhileStatement";
  WhileStatement.body = Statement;
  WhileStatement.test = Expression;
  WhileStatement.loc = Maybe(SourceSpan);

  WithStatement.type = "WithStatement";
  WithStatement.object = Expression;
  WithStatement.body = Statement;
  WithStatement.loc = Maybe(SourceSpan);

  Block.type = "Block";
  Block.statements = List(Statement);
  Block.loc = Maybe(SourceSpan);

  CatchClause.type = "CatchClause";
  CatchClause.binding = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  CatchClause.body = Block;
  CatchClause.loc = Maybe(SourceSpan);

  Directive.type = "Directive";
  Directive.rawValue = STRING;
  Directive.loc = Maybe(SourceSpan);

  FormalParameters.items = List(Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression, BindingWithDefault));
  FormalParameters.rest = Maybe(BindingIdentifier);

  FunctionBody.type = "FunctionBody";
  FunctionBody.directives = List(Directive);
  FunctionBody.statements = List(Statement);
  FunctionBody.loc = Maybe(SourceSpan);

  FunctionDeclaration.type = "FunctionDeclaration";
  FunctionDeclaration.isGenerator = BOOLEAN;
  FunctionDeclaration.name = BindingIdentifier;
  FunctionDeclaration.params = FormalParameters;
  FunctionDeclaration.body = FunctionBody;
  FunctionDeclaration.loc = Maybe(SourceSpan);

  Script.type = "Script";
  Script.body = FunctionBody;
  Script.loc = Maybe(SourceSpan);

  SpreadElement.type = "SpreadElement";
  SpreadElement.expression = Expression;
  SpreadElement.loc = Maybe(SourceSpan);

  Super.type = "Super";
  Super.loc = Maybe(SourceSpan);

  SwitchCase.type = "SwitchCase";
  SwitchCase.test = Expression;
  SwitchCase.consequent = List(Statement);
  SwitchCase.loc = Maybe(SourceSpan);

  SwitchDefault.type = "SwitchDefault";
  SwitchDefault.consequent = List(Statement);
  SwitchDefault.loc = Maybe(SourceSpan);

  TemplateElement.type = "TemplateElement";
  TemplateElement.rawValue = STRING;
  TemplateElement.loc = Maybe(SourceSpan);

  VariableDeclaration.type = "VariableDeclaration";
  VariableDeclaration.kind = VariableDeclarationKind;
  VariableDeclaration.declarators = List(VariableDeclarator);
  VariableDeclaration.loc = Maybe(SourceSpan);

  VariableDeclarator.type = "VariableDeclarator";
  VariableDeclarator.binding = Union(ObjectBinding, ArrayBinding, BindingIdentifier, MemberExpression);
  VariableDeclarator.init = Maybe(Expression);
  VariableDeclarator.loc = Maybe(SourceSpan);

  return SPEC;
}());
