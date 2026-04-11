

/*---
esid: sec-temporal.duration.prototype.total
description: Throws RangeError if unit property is missing.
features: [Temporal]
---*/

const d = new Temporal.Duration(5, 5, 5, 5, 5, 5, 5, 5, 5, 5);


[
  {},
  () => {
  },
  { roundingMode: "ceil" }
].forEach(roundTo => assert.throws(RangeError, () => d.total(roundTo)));
