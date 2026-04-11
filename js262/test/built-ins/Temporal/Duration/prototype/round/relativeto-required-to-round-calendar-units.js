

/*---
esid: sec-temporal.duration.prototype.round
description: relativeTo is required to round calendar units even in durations without calendar units.
features: [Temporal]
---*/

const d2 = new Temporal.Duration(0, 0, 0, 5, 5, 5, 5, 5, 5, 5);


assert.throws(RangeError, () => d2.round("years"));
assert.throws(RangeError, () => d2.round("months"));
assert.throws(RangeError, () => d2.round("weeks"));


assert.throws(RangeError, () => d2.round({ smallestUnit: "years" }));
assert.throws(RangeError, () => d2.round({ smallestUnit: "months" }));
assert.throws(RangeError, () => d2.round({ smallestUnit: "weeks" }));
