

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
features: [exponentiation]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    UpdateExpression ** ExponentiationExpression
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

true ** false = 1;
