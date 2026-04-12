

/*---
esid: sec-temporal.plaintime.prototype.round
description: Rounding can cross midnight
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const plainTime = Temporal.PlainTime.from("23:59:59.999999999");
for (const smallestUnit of ["hour", "minute", "second", "millisecond", "microsecond"]) {
  TemporalHelpers.assertPlainTime(plainTime.round({ smallestUnit }), 0, 0, 0, 0, 0, 0);
}
