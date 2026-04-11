

/*---
description: JSON serialization of BigInt values
esid: pending
features: [BigInt]
---*/

assert.throws(TypeError, () => JSON.stringify(0n));
assert.throws(TypeError, () => JSON.stringify(Object(0n)));
assert.throws(TypeError, () => JSON.stringify({x: 0n}));
