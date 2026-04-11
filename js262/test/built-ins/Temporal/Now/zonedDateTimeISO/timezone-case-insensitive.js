

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: Time zone names are case insensitive
features: [Temporal]
---*/

const timeZone = 'UtC';
const result = Temporal.Now.zonedDateTimeISO(timeZone);
assert.sameValue(result.timeZoneId, 'UTC', `Time zone created from string "${timeZone}"`);
