

/*---
esid: prod-AwaitExpression
description: >
  await cannot immediately follow new in module code
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [top-level-await]
---*/

$DONOTEVALUATE();

new await;
