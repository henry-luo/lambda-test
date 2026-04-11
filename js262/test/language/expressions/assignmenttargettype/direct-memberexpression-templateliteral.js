

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    MemberExpression TemplateLiteral
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

o.f()`` = 1;
