

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ParenthesizedExpression: (Expression)

    Return AssignmentTargetType of Expression.

    CallExpression TemplateLiteral
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

(f()``) = 1;
