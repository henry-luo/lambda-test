

/*---
description: It is an early Syntax Error if AssignmentTargetType of UnaryExpression is not simple. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    UpdateExpression: ++UnaryExpression
    It is an early Syntax Error if AssignmentTargetType of UnaryExpression is not simple.

---*/

$DONOTEVALUATE();

++x = 1;
