

/*---
description: PrimaryExpression FunctionExpression, Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment
---*/

$DONOTEVALUATE();

function() {} = 1;
