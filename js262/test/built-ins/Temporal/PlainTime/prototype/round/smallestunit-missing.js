

/*---
esid: sec-temporal.plaintime.prototype.round
description: RangeError thrown when smallestUnit option is missing
features: [Temporal]
---*/

const plainTime = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
assert.throws(TypeError, () => plainTime.round());
assert.throws(RangeError, () => plainTime.round({}));
assert.throws(RangeError, () => plainTime.round({ roundingIncrement: 1, roundingMode: "ceil" }));
