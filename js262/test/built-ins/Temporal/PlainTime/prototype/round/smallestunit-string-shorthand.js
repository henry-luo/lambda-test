

/*---
esid: sec-temporal.plaintime.prototype.round
description: String as first argument is equivalent to options bag with smallestUnit option
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const instance = new Temporal.PlainTime(12, 34, 56, 789, 999, 999);
const validUnits = [
  "hour",
  "minute",
  "second",
  "millisecond",
  "microsecond",
  "nanosecond",
];
validUnits.forEach((smallestUnit) => {
  const full = instance.round({ smallestUnit });
  const shorthand = instance.round(smallestUnit);
  TemporalHelpers.assertPlainTimesEqual(shorthand, full, `"${smallestUnit}" as first argument to round is equivalent to options bag`);
});
