

/*---
esid: sec-temporal.plaintime.from
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
      () => Temporal.PlainTime.from(arg),
    `${description} not allowed in time string`
  );
}
