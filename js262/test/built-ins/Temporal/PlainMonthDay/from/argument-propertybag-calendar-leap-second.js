

/*---
esid: sec-temporal.plainmonthday.from
description: Leap second is a valid ISO string for a calendar in a property bag
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = "2016-12-31T23:59:60";

const arg = { monthCode: "M11", day: 18, calendar };
const result = Temporal.PlainMonthDay.from(arg);
TemporalHelpers.assertPlainMonthDay(
  result,
  "M11", 18,
  "leap second is a valid ISO string for calendar"
);
