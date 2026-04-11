

/*---
esid: sec-temporal.plaindate.prototype.toplaindatetime
description: ISO 8601 time designator "T" required in cases of ambiguity
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach((string) => {
  let arg = string;
  assert.throws(
    RangeError,
    () => instance.toPlainDateTime(arg),
    `'${arg}' is ambiguous and requires T prefix`
  );
  
  arg = `T${string}`;
  instance.toPlainDateTime(arg);

  arg = ` ${string}`;
  assert.throws(
    RangeError,
    () => instance.toPlainDateTime(arg),
    `space is not accepted as a substitute for T prefix: '${arg}'`
  );
});


TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(
  (arg) => instance.toPlainDateTime(arg));
