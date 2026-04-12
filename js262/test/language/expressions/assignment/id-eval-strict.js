

/*---
es5id: 11.13.1-4-30-s
description: >
  Strict Mode - SyntaxError is thrown if the identifier 'eval' appears as the
  LeftHandSideExpression (PrimaryExpression) of simple assignment(=).
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

(eval) = 20;
