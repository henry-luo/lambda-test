

/*---
description: PrimaryExpression RegularExpressionLiteral; Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment
---*/

$DONOTEVALUATE();

/1/ = 1;
