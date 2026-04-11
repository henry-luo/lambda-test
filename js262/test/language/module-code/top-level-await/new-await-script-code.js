

/*---
esid: prod-AwaitExpression
description: >
  await is not a keyword in script code
features: [top-level-await]
---*/

class await {}

assert.sameValue(new await instanceof await, true);
