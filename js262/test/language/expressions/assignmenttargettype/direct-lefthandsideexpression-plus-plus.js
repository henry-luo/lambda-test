

/*---
description: It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is not simple. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    UpdateExpression: LeftHandSideExpression ++
    It is an early Syntax Error if AssignmentTargetType of LeftHandSideExpression is not simple.

---*/

$DONOTEVALUATE();

x++ = 1;
