

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: Throw if the argument has a calendar field
features: [Temporal]
---*/

const ym = Temporal.PlainYearMonth.from("2019-10");
assert.throws(TypeError, () => ym.with({ year: 2021, calendar: "iso8601" }));
