

/*---
esid: sec-temporal.plaintime.prototype.add
description: >
  ParseTemporalDurationString throws a RangeError when the result is too large.
features: [Temporal]
---*/


var ones = "1".repeat(1000);
assert.sameValue(Number(ones), Infinity);

var time = new Temporal.PlainTime();
var str = "PT" + ones + "S";

assert.throws(RangeError, () => time.add(str));
