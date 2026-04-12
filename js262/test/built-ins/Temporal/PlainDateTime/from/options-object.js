

/*---
esid: sec-temporal.plaindatetime.prototype.from
description: Empty object may be used as options
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from({ year: 1976, month: 11, day: 18 }, {}), 1976, 11, "M11", 18, 0, 0, 0, 0, 0, 0,
  "options may be an empty plain object"
);

TemporalHelpers.assertPlainDateTime(
  Temporal.PlainDateTime.from({ year: 1976, month: 11, day: 18 }, () => {}), 1976, 11, "M11", 18, 0, 0, 0, 0, 0, 0,
  "options may be an empty function object"
);
