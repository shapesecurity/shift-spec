Shift AST Specification
=======================


## About

This document defines an interface for an abstract syntax tree that can be used
to represent the structure of an ECMAScript program. The interface is intended
to be able to represent any structurally valid ECMAScript program (according to
the latest version of ECMA-262) while minimising the number of invalid programs
that may be represented.

This specification is defined using the [Web IDL](http://www.w3.org/TR/WebIDL/)
standard with the following extended attributes:

0. `TypeIndicator`: This extended attribute may be applied to a readonly
   attribute to indicate the following:
     * The *type* following the *attribute* keyword must be an *identifier*.
     * Declare an enum whose *identifier* is the *type* that follows the
       *attribute* keyword, whose values are the *identifier*s of all
       interfaces that inherit the attribute.
     * The value of the attribute is the member of the above-declared enum
       associated with the interface's *identifier*.
0. `NonEmpty`: This extended attribute may be applied to any attribute with a
   Sequence or Array type to disallow the zero-length inhabitant of that type.


## Status

This specification currently supports ECMAScript as defined in ECMA-262 version
5.1, which is the current version of ECMA-262 at the time of this writing.
Changes necessary to support ECMA-262 version 6 are being tracked on the `es6`
branch.


## Implementations

This section is reserved for a listing of implementations that conform to this
specification as well as tools that operate on those data types. To add your
own implementation to this list, please open a Pull Request. Implementations
should be ordered by submission date within a category that appropriately
describes their purpose.

### Create

* [Shift Parser](https://github.com/shapesecurity/shift-parser-js)
* [Shift AST Constructors](https://github.com/shapesecurity/shift-ast-js)
* [Shift-SpiderMonkey Converter](https://github.com/shapesecurity/shift-spidermonkey-converter-js)

### Transform

* [Shift Reducer](https://github.com/shapesecurity/shift-reducer-js)
* [Shift Code Generator](https://github.com/shapesecurity/shift-codegen-js)

### Analyse

* [Shift Validator](https://github.com/shapesecurity/shift-validator-js)
* [Shift Scope Analyzer](https://github.com/shapesecurity/shift-scope-js)

### Use


## Design Decisions

* The concepts of `Block` and `VariableDeclaration` are separate from
  `BlockStatement` and `VariableDeclarationStatement` respectively in order to
  avoid usage of those statements where other types of statements are not
  allowed.
* The `FunctionBody` node represents a `Block` where directives are allowed.
  Directives are not represented as `LiteralStringExpression`s to avoid
  confusion with unnecessarily parenthesised string literals in statement
  position.
* `AssignmentExpression` is separate from `BinaryExpression` to prepare for
  ES6, which will only allow valid bindings in the left operand (12.14.1). All
  other binary expressions are grouped together.
* RegExps and other exotic values are not used as primitives to allow for the
  possibility of serialisation to JSON.

### Compromises

* `VariableDeclarationKind` contains `let` and `const`, which should only be
  allowed in ES6, but implementations had widespread support for these
  declaration kinds long before they had support for any other ES6 feature.
  Because of this, many people consider it an unofficial extension to ES5.
* Similarly, `FunctionDeclaration`s in arbitrary `Statement` position were
  allowed by many ES5 implementations (with varying semantics), so the
  `SourceElement` class was removed, and `FunctionDeclaration` was moved to
  `Statement`.


## License

    Copyright 2014 Shape Security, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
