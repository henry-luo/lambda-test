

/*---
esid: sec-datetime-format-functions
description: Temporal.ZonedDateTime is not supported directly in format()
features: [Temporal]
---*/

const formatter = new Intl.DateTimeFormat();


const {timeZone, ...options} = formatter.resolvedOptions();
const datetime = new Temporal.ZonedDateTime(0n, timeZone);
assert.sameValue(typeof datetime.toLocaleString(undefined, options), "string", "toLocaleString() with same options succeeds");

assert.throws(TypeError, () => formatter.format(datetime), "format() does not support Temporal.ZonedDateTime");
