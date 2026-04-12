

/*---
esid: sec-temporal.zoneddatetime.prototype.withcalendar
description: TypeError thrown when calendar argument not given
features: [Temporal]
---*/

const zonedDateTime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
assert.throws(TypeError, () => zonedDateTime.withCalendar(), "missing argument");
assert.throws(TypeError, () => zonedDateTime.withCalendar(undefined), "undefined argument");
