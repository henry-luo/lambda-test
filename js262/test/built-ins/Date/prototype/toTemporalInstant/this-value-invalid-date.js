

/*---
esid: sec-date.prototype.totemporalinstant
description: >
  Throws RangeError for invalid dates.
info: |
  Date.prototype.toTemporalInstant ( )

  ...
  3. Let t be dateObject.[[DateValue]].
  4. Let ns be ? NumberToBigInt(t) × ℤ(10**6).
  ...
features: [Temporal]
---*/

var date = new Date(NaN);

assert.throws(RangeError, function() {
  date.toTemporalInstant();
});
