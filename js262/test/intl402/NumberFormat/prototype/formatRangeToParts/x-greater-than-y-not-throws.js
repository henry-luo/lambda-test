

/*---
esid: sec-Intl.NumberFormat.prototype.formatRangeToParts
description: >
  "formatRangeToParts" basic tests when argument  x > y, BigInt included and covers PartitionNumberRangePattern return a object.
info: |
  1.1.21 PartitionNumberRangePattern( numberFormat, x, y )
  (...)
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat();


assert.sameValue(typeof nf.formatRangeToParts(23, 12), "object",
    "should return object not throw RangeError");


assert.sameValue(typeof nf.formatRangeToParts(23n, 12n), "object",
    "should return object not throw RangeError");

assert.sameValue(typeof nf.formatRangeToParts(23, -Infinity), "object",
    "should return object not throw RangeError");

assert.sameValue(typeof nf.formatRangeToParts(23, -0), "object",
    "should return object not throw RangeError");
assert.sameValue(typeof nf.formatRangeToParts(0, -0), "object",
    "should return object not throw RangeError");


assert.sameValue(typeof nf.formatRangeToParts(Infinity, 23), "object",
    "should return object not throw RangeError");

assert.sameValue(typeof nf.formatRangeToParts(Infinity, -Infinity), "object",
    "should return object not throw RangeError");

assert.sameValue(typeof nf.formatRangeToParts(Infinity, -0), "object",
    "should return object not throw RangeError");


assert.sameValue(typeof nf.formatRangeToParts(-0, -1), "object",
    "should return object not throw RangeError");

assert.sameValue(typeof nf.formatRangeToParts(-0, -Infinity), "object",
    "should return object not throw RangeError");
