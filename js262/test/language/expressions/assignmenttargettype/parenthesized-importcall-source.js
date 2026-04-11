

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (ParenthesizedExpression)
esid: sec-grouping-operator-static-semantics-assignmenttargettype
features: [source-phase-imports]
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

(import.source()) = 1;
