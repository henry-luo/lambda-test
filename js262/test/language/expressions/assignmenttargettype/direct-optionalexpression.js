

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
features: [optional-chaining]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    OptionalExpression
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

x?.y = 1;
