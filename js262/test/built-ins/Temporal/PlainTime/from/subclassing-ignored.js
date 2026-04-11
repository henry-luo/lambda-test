

/*---
esid: sec-temporal.plaintime.from
description: The receiver is never called when calling from()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.PlainTime,
  "from",
  ["12:34:56.987654321"],
  (result) => TemporalHelpers.assertPlainTime(result, 12, 34, 56, 987, 654, 321),
);
