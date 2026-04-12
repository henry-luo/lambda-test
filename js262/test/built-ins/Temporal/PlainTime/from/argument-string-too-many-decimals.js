

/*---
esid: sec-temporal.plaintime.from
description: No more than 9 decimal places are allowed
features: [Temporal]
---*/

var invalidStrings = [
  "1970-01-01T00:00:00.1234567891",
  "1970-01-01T00:00:00.1234567890",
  "1970-01-01T00+00:00:00.1234567891",
  "1970-01-01T00+00:00:00.1234567890",
  "00:00:00.1234567891",
  "00:00:00.1234567890",
  "00+00:00:00.1234567891",
  "00+00:00:00.1234567890",
];

invalidStrings.forEach(function (arg) {
  assert.throws(
    RangeError,
    function() { Temporal.PlainTime.from(arg); },
    "no more than 9 decimal places are allowed"
  );
});
