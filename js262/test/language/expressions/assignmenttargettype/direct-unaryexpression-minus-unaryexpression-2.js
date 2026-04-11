

/*---
description: Static Semantics AssignmentTargetType, Return invalid (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    UnaryExpression: - UnaryExpression
    Static Semantics AssignmentTargetType, Return invalid

---*/

$DONOTEVALUATE();

-true = 1;
