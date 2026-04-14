

/*---
esid: sec-temporal.plaindate.prototype.yearofweek
description: >
  Temporal.PlainDate.prototype.yearOfWeek returns undefined for all 
  non-ISO calendars without a well-defined week numbering system.
features: [Temporal]
---*/


let calendar = "gregory";
const date = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(date.yearOfWeek, 2024);

calendar = "hebrew";
const nonisodate = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(nonisodate.yearOfWeek, undefined);
