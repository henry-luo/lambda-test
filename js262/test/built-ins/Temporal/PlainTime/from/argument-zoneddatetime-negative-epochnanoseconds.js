

/*---
esid: sec-temporal.plaintime.from
description: A pre-epoch value is handled correctly by the modulo operation in GetISOPartsFromEpoch
info: |
    sec-temporal-getisopartsfromepoch step 1:
      1. Let _remainderNs_ be the mathematical value whose sign is the sign of _epochNanoseconds_ and whose magnitude is abs(_epochNanoseconds_) modulo 10<sup>6</sup>.
    sec-temporal-builtintimezonegetplaindatetimefor step 2:
      2. Let _result_ be ! GetISOPartsFromEpoch(_instant_.[[Nanoseconds]]).
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");


const result = Temporal.PlainTime.from(datetime);
TemporalHelpers.assertPlainTime(result, 16, 50, 35, 0, 0, 1);
