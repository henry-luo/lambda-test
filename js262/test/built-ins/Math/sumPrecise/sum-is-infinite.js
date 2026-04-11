

/*---
esid: sec-math.sumprecise
description: Math.sumPrecise sums infinities
features: [Math.sumPrecise]
---*/

assert.sameValue(Math.sumPrecise([Infinity]), Infinity);
assert.sameValue(Math.sumPrecise([Infinity, Infinity]), Infinity);
assert.sameValue(Math.sumPrecise([-Infinity]), -Infinity);
assert.sameValue(Math.sumPrecise([-Infinity, -Infinity]), -Infinity);
