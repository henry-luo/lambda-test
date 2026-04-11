

/*---
es5id: 13.1-8gs
description: >
    Strict Mode - SyntaxError is thrown if a FunctionExpression has
    two identical parameters
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var _13_1_8_fun = function (param, param) { };
