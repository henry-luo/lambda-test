

/*---
esid: sec-temporal.zoneddatetime.prototype.yearofweek
description: >
  Temporal.ZonedDateTime.prototype.yearOfWeek returns undefined for all 
  non-ISO calendars without a well-defined week numbering system.
features: [Temporal]
---*/


let calendar = "gregory";


const date = new Temporal.ZonedDateTime(1_704_112_496_987_654_321n, "UTC", calendar);

assert.sameValue(date.yearOfWeek, 2024);

calendar = "hebrew";
const nonisodate = new Temporal.ZonedDateTime(1_704_112_496_987_654_321n, "UTC", calendar);

assert.sameValue(nonisodate.yearOfWeek, undefined);
