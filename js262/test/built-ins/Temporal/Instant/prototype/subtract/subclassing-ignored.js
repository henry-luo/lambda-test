

/*---
esid: sec-temporal.instant.prototype.subtract
description: Objects of a subclass are never created as return values for subtract()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.Instant,
  [10n],
  "subtract",
  [{ nanoseconds: 5 }],
  (result) => {
    assert.sameValue(result.epochNanoseconds, 5n, "epochNanoseconds result");
  },
);
