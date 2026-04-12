

/*---
esid: sec-temporal.zoneddatetime.prototype.constructor
description: Time zone names are case insensitive
features: [Temporal]
---*/

const timeZone = 'uTc';
const result = new Temporal.ZonedDateTime(0n, timeZone);
assert.sameValue(result.timeZoneId, 'UTC', `Time zone created from string "${timeZone}"`);
