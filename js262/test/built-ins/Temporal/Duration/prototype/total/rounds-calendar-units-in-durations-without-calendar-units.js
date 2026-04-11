

/*---
esid: sec-temporal.duration.prototype.total
description: relativeTo required to round calendar units even in durations without calendar units.
features: [Temporal]
---*/

const d2 = new Temporal.Duration(0, 0, 0, 5, 5, 5, 5, 5, 5, 5);


assert.throws(RangeError, () => d2.total({ unit: "years" }));
assert.throws(RangeError, () => d2.total({ unit: "months" }));
assert.throws(RangeError, () => d2.total({ unit: "weeks" }));


assert.throws(RangeError, () => d2.total("years"));
assert.throws(RangeError, () => d2.total("months"));
assert.throws(RangeError, () => d2.total("weeks"));
