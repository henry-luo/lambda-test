

/*---
esid: sec-math.sumprecise
description: Math.sumPrecise returns -0 on an empty list or list of all -0
features: [Math.sumPrecise]
---*/

assert.sameValue(Math.sumPrecise([]), -0);
assert.sameValue(Math.sumPrecise([-0]), -0);
assert.sameValue(Math.sumPrecise([-0, -0]), -0);
assert.sameValue(Math.sumPrecise([-0, 0]), 0);
