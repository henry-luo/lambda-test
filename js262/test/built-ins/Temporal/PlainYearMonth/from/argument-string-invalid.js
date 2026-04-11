

/*---
esid: sec-temporal.plainyearmonth.from
description: An invalid ISO string is never supported
includes: [temporalHelpers.js]
features: [Temporal]
---*/

for (const input of TemporalHelpers.ISO.plainYearMonthStringsInvalid()) {
  assert.throws(RangeError, () => Temporal.PlainYearMonth.from(input, { overflow: "reject" }));
  assert.throws(RangeError, () => Temporal.PlainYearMonth.from(input, { overflow: "constrain" }));
}
