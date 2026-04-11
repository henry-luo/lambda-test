

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
flags: [generated, module]
negative:
  phase: parse
  type: SyntaxError
info: |
    ParenthesizedExpression: (Expression)

    Return AssignmentTargetType of Expression.

    ImportCall
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

(import()) = 1;
