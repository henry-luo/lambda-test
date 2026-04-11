

/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
features: [import-defer]
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

import.defer() = 1;
