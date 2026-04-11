

/*---
esid: sec-temporal.plainyearmonth.prototype.tostring
description: If calendarName is "auto", "iso8601" should be omitted.
features: [Temporal]
---*/

const yearmonth = new Temporal.PlainYearMonth(2000, 5);
const result = yearmonth.toString({ calendarName: "auto" });
assert.sameValue(result, "2000-05", `built-in ISO calendar for calendarName = auto`);
