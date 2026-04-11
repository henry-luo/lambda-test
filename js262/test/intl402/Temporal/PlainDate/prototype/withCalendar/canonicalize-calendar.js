

/*---
esid: sec-temporal.plaindate.prototype.withcalendar
description: Calendar ID is canonicalized
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2024, 7, 2);
const result = instance.withCalendar("islamicc");
assert.sameValue(result.calendarId, "islamic-civil", "calendar ID is canonicalized");
