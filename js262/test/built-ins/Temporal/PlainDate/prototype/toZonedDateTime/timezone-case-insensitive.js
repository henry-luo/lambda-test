

/*---
esid: sec-temporal.plaindate.prototype.tozoneddatetime
description: Time zone names are case insensitive
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

const timeZone = 'uTc';
const result = instance.toZonedDateTime(timeZone);
assert.sameValue(result.timeZoneId, 'UTC', `Time zone created from string "${timeZone}"`);
