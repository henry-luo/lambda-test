

/*---
es5id: 11.13.2-6-15-s
esid: sec-assignment-operators
description: >
    Strict Mode - SyntaxError is thrown if the identifier arguments
    appear as the LeftHandSideExpression of a Compound Assignment
    operator(+=)
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

arguments += 20;
