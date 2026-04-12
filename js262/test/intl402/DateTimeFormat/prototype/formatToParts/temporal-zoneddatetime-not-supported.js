

/*---
esid: sec-Intl.DateTimeFormat.prototype.formatToParts
description: Temporal.ZonedDateTime is not supported directly in formatToParts()
features: [Temporal]
---*/

const formatter = new Intl.DateTimeFormat();


const {timeZone, ...options} = formatter.resolvedOptions();
const datetime = new Temporal.ZonedDateTime(0n, timeZone);
assert.sameValue(typeof datetime.toLocaleString(undefined, options), "string", "toLocaleString() with same options succeeds");

assert.throws(TypeError, () => formatter.formatToParts(datetime), "formatToParts() does not support Temporal.ZonedDateTime");
