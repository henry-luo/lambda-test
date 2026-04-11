

/*---
esid: sec-temporal.duration
description: >
  Throws RangeError when any duration component is a too large finite number.
features: [Temporal]
---*/

assert.throws(RangeError, () => new Temporal.Duration(Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_VALUE));

assert.throws(RangeError, () => new Temporal.Duration(-Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -Number.MAX_VALUE));
assert.throws(RangeError, () => new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -Number.MAX_VALUE));
