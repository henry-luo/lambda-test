

/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: >
    It is a Syntax Error if AssignmentTargetType of LeftHandSideExpression is
    not simple.
negative:
  phase: parse
  type: SyntaxError
features: [logical-assignment-operators]

---*/

$DONOTEVALUATE();

function test() {}
test() &&= 1;
