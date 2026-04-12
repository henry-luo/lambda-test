

/*---
description: Head's LeftHandSideExpression must be a simple assignment target
info: |
    It is a Syntax Error if IsValidSimpleAssignmentTarget of
    LeftHandSideExpression is false.
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (this of []) {}
