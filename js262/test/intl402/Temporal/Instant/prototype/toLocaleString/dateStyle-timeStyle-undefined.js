

/*---
esid: sec-temporal.instant.prototype.tolocalestring
description: dateStyle or timeStyle present but undefined
features: [BigInt, Temporal]
---*/

const instant = new Temporal.Instant(957270896_987_650_000n);
const defaultFormatter = new Intl.DateTimeFormat("en");
const expected = defaultFormatter.format(instant);

const actualDate = instant.toLocaleString("en", { dateStyle: undefined });
assert.sameValue(actualDate, expected, "dateStyle undefined is the same as being absent");

const actualTime = instant.toLocaleString("en", { timeStyle: undefined });
assert.sameValue(actualTime, expected, "timeStyle undefined is the same as being absent");
