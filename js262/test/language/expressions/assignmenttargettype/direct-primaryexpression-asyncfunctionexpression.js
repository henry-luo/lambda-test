

/*---
description: PrimaryExpression AsyncFunctionExpression; Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment
---*/

$DONOTEVALUATE();

async function () {} = 1;
