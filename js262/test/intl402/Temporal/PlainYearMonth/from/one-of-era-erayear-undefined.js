

/*---
esid: sec-temporal.plainyearmonth.from
description: Throw a TypeError if only one of era/eraYear fields is present
features: [Temporal]
---*/

const base = { year: 2000, month: 5, day: 2, era: "ce", calendar: "gregory" };
assert.throws(TypeError, () => Temporal.PlainYearMonth.from(base));

const base2 = { year: 2000, month: 5, day: 2, eraYear: 1, calendar: "gregory" };
assert.throws(TypeError, () => Temporal.PlainYearMonth.from(base2));
