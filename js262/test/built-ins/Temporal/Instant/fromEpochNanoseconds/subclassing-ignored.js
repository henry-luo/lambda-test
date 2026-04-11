

/*---
esid: sec-temporal.instant.fromepochnanoseconds
description: The receiver is never called by fromEpochNanoseconds()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.Instant,
  "fromEpochNanoseconds",
  [10n],
  (result) => {
    assert.sameValue(result.epochNanoseconds, 10n, "epochNanoseconds result");
  },
);
