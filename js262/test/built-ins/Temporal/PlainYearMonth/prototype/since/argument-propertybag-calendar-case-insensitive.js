

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: The calendar name is case-insensitive
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2019, 6);

const arg = { year: 2019, monthCode: "M06", calendar: "IsO8601" };
const result = instance.since(arg);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Calendar is case-insensitive");

arg.calendar = "\u0130SO8601";
assert.throws(
  RangeError,
  () => instance.since(arg),
  "calendar ID is capital dotted I is not lowercased"
);
