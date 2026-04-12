

/*---
esid: sec-temporal.plainmonthday.from
description: TypeError thrown when options argument is a primitive
features: [BigInt, Symbol, Temporal]
---*/

const fields = { month: 2, day: 31 };

const values = [null, true, "hello", Symbol("foo"), 1, 1n];
for (const badOptions of values) {
  assert.throws(TypeError, () => Temporal.PlainMonthDay.from(fields, badOptions));
}
