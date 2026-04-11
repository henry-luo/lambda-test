

/*---
esid: sec-temporal.plaindate.prototype.tozoneddatetime
description: ISO 8601 time designator "T" required in cases of ambiguity
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach((string) => {
  let arg = string;
  assert.throws(
    RangeError,
    () => instance.toZonedDateTime({ plainTime: arg, timeZone: "UTC" }),
    `'${arg}' is ambiguous and requires T prefix`
  );
  
  arg = `T${string}`;
  instance.toZonedDateTime({ plainTime: arg, timeZone: "UTC" });

  arg = ` ${string}`;
  assert.throws(
    RangeError,
    () => instance.toZonedDateTime({ plainTime: arg, timeZone: "UTC" }),
    `space is not accepted as a substitute for T prefix: '${arg}'`
  );
});


TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(
  (arg) => instance.toZonedDateTime({ plainTime: arg, timeZone: "UTC" }));
