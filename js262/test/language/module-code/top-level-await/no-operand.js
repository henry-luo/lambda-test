

/*---
esid: prod-AwaitExpression
description: >
  await requries an operand.
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [top-level-await]
---*/

$DONOTEVALUATE();

await;
