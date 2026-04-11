

/*---
esid: sec-temporal.plaintime.from
description: ISO 8601 time designator "T" required in cases of ambiguity
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach((string) => {
  let arg = string;
  assert.throws(
    RangeError,
    () => Temporal.PlainTime.from(arg),
    `'${arg}' is ambiguous and requires T prefix`
  );
  
  arg = `T${string}`;
  Temporal.PlainTime.from(arg);

  arg = ` ${string}`;
  assert.throws(
    RangeError,
    () => Temporal.PlainTime.from(arg),
    `space is not accepted as a substitute for T prefix: '${arg}'`
  );
});


TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(
  (arg) => Temporal.PlainTime.from(arg));
