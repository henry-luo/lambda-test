

/*---
esid: sec-temporal.plaintime.prototype.tostring
description: Rounding can cross midnight
features: [Temporal]
---*/

const plainTime = new Temporal.PlainTime(23, 59, 59, 999, 999, 999);  
for (const roundingMode of ["ceil", "halfExpand"]) {
  assert.sameValue(plainTime.toString({ fractionalSecondDigits: 8, roundingMode }), "00:00:00.00000000");
}
