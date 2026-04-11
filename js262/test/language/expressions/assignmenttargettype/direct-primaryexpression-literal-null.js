

/*---
description: PrimaryExpression Literal NullLiteral; Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment
---*/

$DONOTEVALUATE();

null = 1;
