

/*---
esid: sec-temporal.plaindate.prototype.weekofyear
description: >
  Temporal.PlainDate.prototype.weekOfYear returns undefined for all 
  non-ISO calendars without a well-defined week numbering system.
features: [Temporal]
---*/


let calendar = "gregory";
const date = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(date.weekOfYear, 1);

calendar = "hebrew";
const nonisodate = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(nonisodate.weekOfYear, undefined);
