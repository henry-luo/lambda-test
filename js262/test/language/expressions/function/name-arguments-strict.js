

/*---
es5id: 13.1-14-s
description: >
    StrictMode - SyntaxError is thrown if 'arguments' occurs as the
    Identifier of a FunctionExpression in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

(function arguments() {});
