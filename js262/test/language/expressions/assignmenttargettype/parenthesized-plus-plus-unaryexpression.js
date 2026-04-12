

/*---
description: It is an early Syntax Error if AssignmentTargetType of UnaryExpression is not simple. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ParenthesizedExpression: (Expression)

    Return AssignmentTargetType of Expression.

    UpdateExpression: ++UnaryExpression
    It is an early Syntax Error if AssignmentTargetType of UnaryExpression is not simple.

---*/

$DONOTEVALUATE();

(++x) = 1;
