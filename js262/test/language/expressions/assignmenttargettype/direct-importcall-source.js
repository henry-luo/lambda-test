

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
features: [source-phase-imports]
flags: [generated, module]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    ImportCall
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

import.source() = 1;
