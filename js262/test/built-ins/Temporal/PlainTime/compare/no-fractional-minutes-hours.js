

/*---
esid: sec-temporal.plaintime.compare
description: Fractional minutes or hours in time string should throw RangeError
features: [Temporal]
---*/

const invalidStrings = [
  ["05:07.123", "Fractional minutes"],
  ["12.5", "Fractional hours"],
];

for (const [arg, description] of invalidStrings) {
  assert.throws(
    RangeError,
      () => Temporal.PlainTime.compare(arg, new Temporal.PlainTime(20, 4, 3)),
    `${description} not allowed in time string (first argument)`
  );
  assert.throws(
    RangeError,
      () => Temporal.PlainTime.compare(new Temporal.PlainTime(20, 4, 3), arg),
    `${description} not allowed in time string (second argument)`
  );
}
