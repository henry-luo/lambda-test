

/*---
esid: sec-math.sumprecise
description: Math.sumPrecise returns NaN when input has NaN or when adding infinities
features: [Math.sumPrecise]
---*/

assert.sameValue(Math.sumPrecise([NaN]), NaN);
assert.sameValue(Math.sumPrecise([Infinity, -Infinity]), NaN);
assert.sameValue(Math.sumPrecise([-Infinity, Infinity]), NaN);
