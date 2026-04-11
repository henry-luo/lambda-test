

/*---
es5id: 11.13.1-4-28-s
description: >
  Strict Mode - SyntaxError is thrown if the identifier 'arguments' appears
  as the LeftHandSideExpression of simple assignment(=) under strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var arguments;
