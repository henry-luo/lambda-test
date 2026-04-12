

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    import.meta
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

import.meta = 1;
