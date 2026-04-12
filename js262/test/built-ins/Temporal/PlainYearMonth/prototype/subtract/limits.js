

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: RangeError thrown when going out of range
features: [Temporal]
---*/

const min = Temporal.PlainYearMonth.from("-271821-04");
for (const overflow of ["reject", "constrain"]) {
  assert.throws(RangeError, () => min.subtract({ months: 1 }, { overflow }), overflow);
}
