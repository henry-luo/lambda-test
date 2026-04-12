

/*---
esid: prod-AwaitExpression
description: >
  Await can await any thenable. If the thenable's then is not callable,
  await evaluates to the thenable
flags: [module, async]
features: [top-level-await]
---*/

var thenable = { then: 42 };
var res = await thenable;
assert.sameValue(res, thenable);

$DONE();

