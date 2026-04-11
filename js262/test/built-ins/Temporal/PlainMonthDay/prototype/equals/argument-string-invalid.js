

/*---
esid: sec-temporal.plainmonthday.prototype.equals
description: An invalid ISO string is never supported
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainMonthDay(11, 18);

for (const arg of TemporalHelpers.ISO.plainMonthDayStringsInvalid()) {
  assert.throws(RangeError, () => instance.equals(arg), `"${arg}" is not a valid PlainMonthDay string`);
}
