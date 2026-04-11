

/*---
esid: sec-assignment-operators
description: >
    Strict Mode - SyntaxError is thrown if the identifier arguments
    appear as the LeftHandSideExpression of a Logical Assignment
    operator(||=)
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
features: [logical-assignment-operators]
---*/
$DONOTEVALUATE();

arguments ||= 20;
