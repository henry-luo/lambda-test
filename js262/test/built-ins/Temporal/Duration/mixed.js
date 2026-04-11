

/*---
esid: sec-temporal.duration
description: Constructor with mixed signs.
features: [Temporal]
---*/

assert.throws(RangeError, () => new Temporal.Duration(-1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, -1, 1, 1, 1, 1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, -1, 1, 1, 1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, -1, 1, 1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, -1, 1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, 1, -1, 1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, 1, 1, -1, 1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, 1, 1, 1, -1, 1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, 1, 1, 1, 1, -1, 1));
assert.throws(RangeError, () => new Temporal.Duration(1, 1, 1, 1, 1, 1, 1, 1, 1, -1));
