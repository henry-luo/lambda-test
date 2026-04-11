

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: Invalid options throw
features: [Temporal]
---*/

const ym = Temporal.PlainYearMonth.from("2019-11");
const values = [null, true, "hello", Symbol("foo"), 1, 1n];
for (const badOptions of values) {
  assert.throws(TypeError, () => ym.add({ years: 1 }, badOptions));
}
