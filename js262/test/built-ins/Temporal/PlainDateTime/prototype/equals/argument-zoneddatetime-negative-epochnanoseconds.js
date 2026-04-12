

/*---
esid: sec-temporal.plaindatetime.prototype.equals
description: A pre-epoch value is handled correctly by the modulo operation in GetISOPartsFromEpoch
info: |
    sec-temporal-getisopartsfromepoch step 1:
      1. Let _remainderNs_ be the mathematical value whose sign is the sign of _epochNanoseconds_ and whose magnitude is abs(_epochNanoseconds_) modulo 10<sup>6</sup>.
    sec-temporal-builtintimezonegetplaindatetimefor step 2:
      2. Let _result_ be ! GetISOPartsFromEpoch(_instant_.[[Nanoseconds]]).
features: [Temporal]
---*/

const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");


const instance = new Temporal.PlainDateTime(1969, 7, 24, 16, 50, 35, 0, 0, 1);
const result = instance.equals(datetime);
assert.sameValue(result, true);
