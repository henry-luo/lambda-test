

/*---
es5id: 12.2.1-4gs
description: >
    Strict Mode - SyntaxError is thrown if a VariableDeclarationNoIn
    occurs within strict code and its Identifier is arguments
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var arguments;
