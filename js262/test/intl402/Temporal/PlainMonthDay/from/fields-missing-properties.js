

/*---
esid: sec-temporal.plainmonthday.from
description: >
  Basic tests for PlainMonthDay.from(object) with missing properties for non-ISO
  calendars
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainMonthDay.from({ month: 11, day: 18, calendar: "gregory" }), "month, day with non-iso8601 calendar");
