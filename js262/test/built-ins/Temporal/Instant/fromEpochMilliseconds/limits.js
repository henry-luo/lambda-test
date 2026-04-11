

/*---
esid: sec-temporal.instant.fromepochmilliseconds
description: Min/max range.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


var limit = 8640000000000000;
assert.throws(RangeError, () => Temporal.Instant.fromEpochMilliseconds(-limit - 1));
assert.throws(RangeError, () => Temporal.Instant.fromEpochMilliseconds(limit + 1));
TemporalHelpers.assertInstantsEqual(Temporal.Instant.fromEpochMilliseconds(-limit),
                                    Temporal.Instant.from("-271821-04-20T00:00:00Z"));
TemporalHelpers.assertInstantsEqual(Temporal.Instant.fromEpochMilliseconds(limit),
                                    Temporal.Instant.from("+275760-09-13T00:00:00Z"));

