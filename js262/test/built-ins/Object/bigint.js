

/*---
description: Conversion of BigInt values to Objects
esid: pending
features: [BigInt]
---*/

assert(Object(0n) instanceof BigInt);
assert.sameValue(Object(0n).valueOf(), 0n);
