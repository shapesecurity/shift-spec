/**
 * Copyright 2014 Shape Security, Inc.
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

/*
  INFO: This specification is currently divided into the following sections:
  * supporting types
  * node classes
  * bindings
  * classes
  * modules
  * functions
  * object expressions
  * literals
  * other expressions
  * other statements
  * directives
  * other nodes
*/


// supporting types


typedef (SpreadElement or Expression)[] Arguments;
typedef DOMString string;
typedef string Identifier;
typedef string IdentifierName;
typedef string Label;

enum VariableDeclarationKind { "var", "let", "const" };

enum CompoundAssignmentOperator {
  "+=", "-=", "*=", "/=", "%=", "**=", "<<=", ">>=", ">>>=", "|=", "^=", "&="
};
enum BinaryOperator {
  "==", "!=", "===", "!==", "<", "<=", ">", ">=", "in", "instanceof", "<<",
  ">>", ">>>", "+", "-", "*", "/", "%", "**", ",", "||", "&&", "|", "^", "&"
};
enum UnaryOperator { "+", "-", "!", "~", "typeof", "void", "delete" };
enum UpdateOperator { "++", "--" };

// `FunctionExpression`, `FunctionDeclaration`, `GeneratorExpression`, `GeneratorDeclaration`, `AsyncFunctionExpression`, `AsyncFunctionDeclaration`
interface Function {
  // True for `AsyncFunctionExpression` and `AsyncFunctionDeclaration`, false otherwise.
  attribute boolean isAsync;
  // True for `GeneratorExpression` and `GeneratorDeclaration`, false otherwise.
  attribute boolean isGenerator;
  attribute FormalParameters params;
  attribute FunctionBody body;
};

// node classes

interface Node {
  [TypeIndicator] readonly attribute Type type;
};

// `Script`, `Module`
interface Program : Node { };

interface Statement : Node { };
interface IterationStatement : Statement {
  attribute Statement body;
};

interface Expression : Node { };
// `MemberExpression`, `SuperProperty`
interface MemberExpression : Expression {
  // The object whose property is being accessed.
  attribute (Expression or Super) _object;
};

// `[ Expression ]`, `. IdentifierName`
interface PropertyName : Node { };

// `PropertyDefinition`
interface ObjectProperty : Node { };
// `PropertyName : AssignmentExpression`, `MethodDefinition`
interface NamedObjectProperty : ObjectProperty {
  attribute PropertyName name;
};
interface MethodDefinition : NamedObjectProperty {
  attribute FunctionBody body;
};

interface ImportDeclaration : Node {
  attribute string moduleSpecifier;
};
interface ExportDeclaration : Node { };

// `IdentifierReference`, `BindingIdentifier`
interface VariableReference : Node {
  attribute Identifier name;
};

// bindings

typedef (ObjectBinding or ArrayBinding) BindingPattern;
typedef (BindingPattern or BindingIdentifier) Binding;

typedef (AssignmentTargetIdentifier or MemberAssignmentTarget) SimpleAssignmentTarget;
typedef (ObjectAssignmentTarget or ArrayAssignmentTarget) AssignmentTargetPattern;
// `DestructuringAssignmentTarget`
typedef (AssignmentTargetPattern or SimpleAssignmentTarget) AssignmentTarget;

// `FormalParameter`
typedef (Binding or BindingWithDefault) Parameter;

interface BindingWithDefault : Node {
  attribute Binding binding;
  attribute Expression init;
};

interface BindingIdentifier : VariableReference { };

interface AssignmentTargetIdentifier : VariableReference { };

interface MemberAssignmentTarget : Node {
  // The object whose property is being assigned.
  attribute (Expression or Super) _object;
};

interface ComputedMemberAssignmentTarget : MemberAssignmentTarget {
  // The expression resolving to the name of the property to be accessed.
  attribute Expression expression;
};

interface StaticMemberAssignmentTarget : MemberAssignmentTarget {
  // The name of the property to be accessed.
  attribute IdentifierName property;
};

// `ArrayBindingPattern`
interface ArrayBinding : Node {
  // The elements of the array pattern; a null value represents an elision.
  attribute (Binding or BindingWithDefault)?[] elements;
  attribute Binding? rest;
};

interface ObjectBinding : Node {
  attribute BindingProperty[] properties;
};

interface BindingProperty : Node { };

// `SingleNameBinding`
interface BindingPropertyIdentifier : BindingProperty {
  attribute BindingIdentifier binding;
  attribute Expression? init;
};

// `BindingProperty :: PropertyName : BindingElement`
interface BindingPropertyProperty : BindingProperty {
  attribute PropertyName name;
  attribute (Binding or BindingWithDefault) binding;
};

// This interface represents the case where the initializer is present in `AssignmentElement :: DestructuringAssignmentTarget Initializer_opt`.
interface AssignmentTargetWithDefault : Node {
  attribute AssignmentTarget binding;
  attribute Expression init;
};

// `ArrayAssignmentPattern`
interface ArrayAssignmentTarget : Node {
  // The elements of the array pattern; a null value represents an elision.
  attribute (AssignmentTarget or AssignmentTargetWithDefault)?[] elements;
  attribute AssignmentTarget? rest;
};

// `ObjectAssignmentPattern`
interface ObjectAssignmentTarget : Node {
  attribute AssignmentTargetProperty[] properties;
};

// `AssignmentProperty`
interface AssignmentTargetProperty : Node { };

// `AssignmentProperty :: IdentifierReference Initializer_opt`
interface AssignmentTargetPropertyIdentifier : AssignmentTargetProperty {
  attribute AssignmentTargetIdentifier binding;
  attribute Expression? init;
};

// `AssignmentProperty :: PropertyName : AssignmentElement`
interface AssignmentTargetPropertyProperty : AssignmentTargetProperty {
  attribute PropertyName name;
  attribute (AssignmentTarget or AssignmentTargetWithDefault) binding;
};


// classes

interface Class {
  attribute Expression? super;
  attribute ClassElement[] elements;
};

interface ClassExpression : Expression {
  attribute BindingIdentifier? name;
};
ClassExpression implements Class;

interface ClassDeclaration : Statement {
  attribute BindingIdentifier name;
};
ClassDeclaration implements Class;

interface ClassElement : Node {
  // True iff `IsStatic` of ClassElement is true.
  attribute boolean isStatic;
  attribute MethodDefinition method;
};


// modules

interface Module : Program {
  attribute Directive[] directives;
  attribute (ImportDeclaration or ExportDeclaration or Statement)[] items;
};

// An `ImportDeclaration` not including a namespace import.
interface Import : ImportDeclaration {
  // `ImportedDefaultBinding`, if present.
  attribute BindingIdentifier? defaultBinding;
  attribute ImportSpecifier[] namedImports;
};

// An `ImportDeclaration` including a namespace import.
interface ImportNamespace : ImportDeclaration {
  // `ImportedDefaultBinding`, if present.
  attribute BindingIdentifier? defaultBinding;
  attribute BindingIdentifier namespaceBinding;
};

interface ImportSpecifier : Node {
  // The `IdentifierName` in the production `ImportSpecifier :: IdentifierName as ImportedBinding`; absent if this specifier represents the production `ImportSpecifier :: ImportedBinding`.
  attribute IdentifierName? name;
  attribute BindingIdentifier binding;
};

// `export * FromClause;`
interface ExportAllFrom : ExportDeclaration {
  attribute string moduleSpecifier;
};

// `export ExportClause FromClause;`
interface ExportFrom : ExportDeclaration {
  attribute ExportFromSpecifier[] namedExports;
  attribute string moduleSpecifier;
};

// `export ExportClause;`
interface ExportLocals : ExportDeclaration {
  attribute ExportLocalSpecifier[] namedExports;
};

// `export VariableStatement`, `export Declaration`
interface Export : ExportDeclaration {
  attribute (FunctionDeclaration or ClassDeclaration or VariableDeclaration) declaration;
};

// `export default HoistableDeclaration`, `export default ClassDeclaration`, `export default AssignmentExpression`
interface ExportDefault : ExportDeclaration {
  attribute (FunctionDeclaration or ClassDeclaration or Expression) body;
};

// `ExportSpecifier`, as part of an `ExportFrom`.
interface ExportFromSpecifier : Node {
  // The only `IdentifierName in `ExportSpecifier :: IdentifierName`, or the first in `ExportSpecifier :: IdentifierName as IdentifierName`.
  attribute IdentifierName name;
  // The second `IdentifierName` in `ExportSpecifier :: IdentifierName as IdentifierName`, if that is the production represented.
  attribute IdentifierName? exportedName;
};

// `ExportSpecifier`, as part of an `ExportLocals`.
interface ExportLocalSpecifier : Node {
  // The only `IdentifierName in `ExportSpecifier :: IdentifierName`, or the first in `ExportSpecifier :: IdentifierName as IdentifierName`.
  attribute IdentifierExpression name;
  // The second `IdentifierName` in `ExportSpecifier :: IdentifierName as IdentifierName`, if present.
  attribute IdentifierName? exportedName;
};


// property definition

// `MethodDefinition :: PropertyName ( UniqueFormalParameters ) { FunctionBody }`, `GeneratorMethod :: * PropertyName ( UniqueFormalParameters ) { GeneratorBody }`, `AsyncMethod :: async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }`
interface Method : MethodDefinition {
  // True for `AsyncMethod`, false otherwise.
  attribute boolean isAsync;
  // True for `GeneratorMethod`, false otherwise.
  attribute boolean isGenerator;
  // The `UniqueFormalParameters`.
  attribute FormalParameters params;
};

// `get PropertyName ( ) { FunctionBody }`
interface Getter : MethodDefinition { };

// `set PropertyName ( PropertySetParameterList ) { FunctionBody }`
interface Setter : MethodDefinition {
  // The `PropertySetParameterList`.
  attribute Parameter param;
};

// `PropertyDefinition :: PropertyName : AssignmentExpression`
interface DataProperty : NamedObjectProperty {
  // The `AssignmentExpression`.
  attribute Expression expression;
};

// `PropertyDefinition :: IdentifierReference`
interface ShorthandProperty : ObjectProperty {
  // The `IdentifierReference`.
  attribute IdentifierExpression name;
};

interface ComputedPropertyName : PropertyName {
  attribute Expression expression;
};

// `LiteralPropertyName`
interface StaticPropertyName : PropertyName {
  attribute string value;
};


// literals

// `BooleanLiteral`
interface LiteralBooleanExpression : Expression {
  attribute boolean value;
};

// A `NumericLiteral` for which the Number value of its MV is positive infinity.
interface LiteralInfinityExpression : Expression { };

// `NullLiteral`
interface LiteralNullExpression : Expression { };

// `NumericLiteral`
interface LiteralNumericExpression : Expression {
  attribute double value;
};

// `RegularExpressionLiteral`
interface LiteralRegExpExpression : Expression {
  attribute string pattern;
  // Whether the `g` flag is present.
  attribute boolean global;
  // Whether the `i` flag is present.
  attribute boolean ignoreCase;
  // Whether the `m` flag is present.
  attribute boolean multiLine;
  // Whether the `y` flag is present.
  attribute boolean sticky;
  // Whether the `u` flag is present.
  attribute boolean unicode;
};

// `StringLiteral`
interface LiteralStringExpression : Expression {
  attribute string value;
};


// other expressions

// `ArrayLiteral`
interface ArrayExpression : Expression {
  // The elements of the array literal; a null value represents an elision.
  attribute (SpreadElement or Expression)?[] elements;
};

// `ArrowFunction`, `AsyncArrowFunction`
interface ArrowExpression : Expression {
  // True for `AsyncArrowFunction`, false otherwise.
  attribute boolean isAsync;
  attribute FormalParameters params;
  attribute (FunctionBody or Expression) body;
};

// `AssignmentExpression :: LeftHandSideExpression = AssignmentExpression`
interface AssignmentExpression : Expression {
  // The `LeftHandSideExpression`.
  attribute AssignmentTarget binding;
  // The `AssignmentExpression` following the `=`.
  attribute Expression expression;
};

// `ExponentiationExpression`, `MultiplicativeExpression`, `AdditiveExpression`, `ShiftExpression`, `RelationalExpression`, `EqualityExpression`, `BitwiseANDExpression`, `BitwiseXORExpression`, `BitwiseORExpression`, `LogicalANDExpression`, `LogicalORExpression`
interface BinaryExpression : Expression {
  attribute BinaryOperator operator;
  // The expression before the operator.
  attribute Expression left;
  // The expression after the operator.
  attribute Expression right;
};

interface CallExpression : Expression {
  attribute (Expression or Super) callee;
  attribute Arguments arguments;
};

// `AssignmentExpression :: LeftHandSideExpression AssignmentOperator AssignmentExpression`
interface CompoundAssignmentExpression : Expression {
  attribute CompoundAssignmentOperator operator;
  // The `LeftHandSideExpression`.
  attribute SimpleAssignmentTarget binding;
  // The `AssignmentExpression`.
  attribute Expression expression;
};

interface ComputedMemberExpression : MemberExpression {
  // The expression resolving to the name of the property to be accessed.
  attribute Expression expression;
};

// `ConditionalExpression :: LogicalORExpression ? AssignmentExpression : AssignmentExpression`
interface ConditionalExpression : Expression {
  // The `LogicalORExpression`.
  attribute Expression test;
  // The first `AssignmentExpression`.
  attribute Expression consequent;
  // The second `AssignmentExpression`.
  attribute Expression alternate;
};

interface FunctionExpression : Expression {
  attribute BindingIdentifier? name;
};
FunctionExpression implements Function;

// `IdentifierReference`
interface IdentifierExpression : Expression { };
IdentifierExpression implements VariableReference;

interface NewExpression : Expression {
  attribute Expression callee;
  attribute Arguments arguments;
};

interface NewTargetExpression : Expression { };

interface ObjectExpression : Expression {
  attribute ObjectProperty[] properties;
};

interface UnaryExpression : Expression {
  attribute UnaryOperator operator;
  attribute Expression operand;
};

interface StaticMemberExpression : MemberExpression {
  // The name of the property to be accessed.
  attribute IdentifierName property;
};

// `TemplateLiteral`, `MemberExpression :: MemberExpression TemplateLiteral`, `CallExpression : CallExpression TemplateLiteral`
interface TemplateExpression : Expression {
  // The second `MemberExpression` or `CallExpression`, if present.
  attribute Expression? tag;
  // The contents of the template. This list must be alternating TemplateElements and Expressions, beginning and ending with TemplateElement.
  attribute (Expression or TemplateElement)[] elements;
};

// `PrimaryExpression :: this`
interface ThisExpression : Expression { };

// `UpdateExpression :: LeftHandSideExpression ++`, `UpdateExpression :: LeftHandSideExpression --`, `UpdateExpression :: ++ LeftHandSideExpression`, ``UpdateExpression :: -- LeftHandSideExpression`
interface UpdateExpression : Expression {
  // True for `UpdateExpression :: ++ LeftHandSideExpression` and `UpdateExpression :: -- LeftHandSideExpression`, false otherwise.
  attribute boolean isPrefix;
  attribute UpdateOperator operator;
  attribute SimpleAssignmentTarget operand;
};

// `YieldExpression :: yield`, `YieldExpression :: yield AssignmentExpression`
interface YieldExpression : Expression {
  // The `AssignmentExpression`, if present.
  attribute Expression? expression;
};

// `YieldExpression :: yield * AssignmentExpression`
interface YieldGeneratorExpression : Expression {
  attribute Expression expression;
};

interface AwaitExpression : Expression {
  attribute Expression expression;
};


// other statements

interface BlockStatement : Statement {
  attribute Block block;
};

interface BreakStatement : Statement {
  attribute Label? label;
};

interface ContinueStatement : Statement {
  attribute Label? label;
};

interface DebuggerStatement : Statement { };

interface DoWhileStatement : IterationStatement {
  attribute Expression test;
};

interface EmptyStatement : Statement { };

interface ExpressionStatement : Statement {
  attribute Expression expression;
};

// `for ( LeftHandSideExpression in Expression ) Statement`, `for ( var ForBinding in Expression ) Statement`, `for ( ForDeclaration in Expression ) Statement`, `for ( var BindingIdentifier Initializer in Expression ) Statement`
interface ForInStatement : IterationStatement {
  // The expression or declaration before `in`.
  attribute (VariableDeclaration or AssignmentTarget) left;
  // The expression after `in`.
  attribute Expression right;
};

// `for ( LeftHandSideExpression of Expression ) Statement`, `for ( var ForBinding of Expression ) Statement`, `for ( ForDeclaration of Expression ) Statement`
interface ForOfStatement : IterationStatement {
  // The expression or declaration before `of`.
  attribute (VariableDeclaration or AssignmentTarget) left;
  // The expression after `of`.
  attribute Expression right;
};

// `for ( Expression ; Expression ; Expression ) Statement`, `for ( var VariableDeclarationlist ; Expression ; Expression ) Statement`
interface ForStatement : IterationStatement {
  // The expression or declaration before the first `;`, if present.
  attribute (VariableDeclaration or Expression)? init;
  // The expression before the second `;`, if present
  attribute Expression? test;
  // The expression after the second `;`, if present
  attribute Expression? update;
};

// `if ( Expression ) Statement`, `if ( Expression ) Statement else Statement`,
interface IfStatement : Statement {
  attribute Expression test;
  // The first `Statement`.
  attribute Statement consequent;
  // The second `Statement`, if present.
  attribute Statement? alternate;
};

interface LabeledStatement : Statement {
  attribute Label label;
  attribute Statement body;
};

interface ReturnStatement : Statement {
  attribute Expression? expression;
};

// A `SwitchStatement` whose `CaseBlock` is `CaseBlock :: { CaseClauses }`.
interface SwitchStatement : Statement {
  attribute Expression discriminant;
  attribute SwitchCase[] cases;
};

// A `SwitchStatement` whose `CaseBlock` is `CaseBlock :: { CaseClauses DefaultClause CaseClauses }`.
interface SwitchStatementWithDefault : Statement {
  attribute Expression discriminant;
  // The `CaseClauses` before the `DefaultClause`.
  attribute SwitchCase[] preDefaultCases;
  // The `DefaultClause`.
  attribute SwitchDefault defaultCase;
  // The `CaseClauses` after the `DefaultClause`.
  attribute SwitchCase[] postDefaultCases;
};

interface ThrowStatement : Statement {
  attribute Expression expression;
};

// `TryStatement :: try Block Catch`
interface TryCatchStatement : Statement {
  attribute Block body;
  attribute CatchClause catchClause;
};

// `TryStatement :: try Block Finally`, `TryStatement :: try Block Catch Finally`
interface TryFinallyStatement : Statement {
  // The `Block`.
  attribute Block body;
  // The `Catch`, if present.
  attribute CatchClause? catchClause;
  // The `Finally`.
  attribute Block finalizer;
};

interface VariableDeclarationStatement : Statement {
  attribute VariableDeclaration declaration;
};

interface WhileStatement : IterationStatement {
  attribute Expression test;
};

interface WithStatement : Statement {
  attribute Expression _object;
  attribute Statement body;
};


// other nodes

interface Block : Node {
  attribute Statement[] statements;
};

// `Catch`
interface CatchClause : Node {
  attribute Binding binding;
  attribute Block body;
};

// An item in a `DirectivePrologue`
interface Directive : Node {
  attribute string rawValue;
};

interface FormalParameters : Node {
  attribute Parameter[] items;
  attribute Binding? rest;
};

interface FunctionBody : Node {
  attribute Directive[] directives;
  attribute Statement[] statements;
};

interface FunctionDeclaration : Statement {
  attribute BindingIdentifier name;
};
FunctionDeclaration implements Function;

interface Script : Program {
  attribute Directive[] directives;
  attribute Statement[] statements;
};

interface SpreadElement : Node {
  attribute Expression expression;
};

// `super`
interface Super : Node { };

// `CaseClause`
interface SwitchCase : Node {
  attribute Expression test;
  attribute Statement[] consequent;
};

// `DefaultClause`
interface SwitchDefault : Node {
  attribute Statement[] consequent;
};

// `TemplateCharacters`
interface TemplateElement : Node {
  attribute string rawValue;
};

interface VariableDeclaration : Node {
  attribute VariableDeclarationKind kind;
  [NonEmpty] attribute VariableDeclarator[] declarators;
};

interface VariableDeclarator : Node {
  attribute Binding binding;
  attribute Expression? init;
};
