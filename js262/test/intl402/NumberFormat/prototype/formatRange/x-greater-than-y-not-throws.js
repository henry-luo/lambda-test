

/*---
esid: sec-Intl.NumberFormat.prototype.formatRange
description: >
  "formatRange" basic tests when argument  x > y, BigInt included and covers PartitionNumberRangePattern return a string.
info: |
  1.1.21 PartitionNumberRangePattern( numberFormat, x, y )
  (...)
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat();


assert.sameValue(typeof nf.formatRange(23, 12), "string",
    "should return string not throw RangeError");


assert.sameValue(typeof nf.formatRange(23n, 12n), "string",
    "should return string not throw RangeError");

assert.sameValue(typeof nf.formatRange(23, -Infinity), "string",
    "should return string not throw RangeError");

assert.sameValue(typeof nf.formatRange(23, -0), "string",
    "should return string not throw RangeError");
assert.sameValue(typeof nf.formatRange(0, -0), "string",
    "should return string not throw RangeError");


assert.sameValue(typeof nf.formatRange(Infinity, 23), "string",
    "should return string not throw RangeError");

assert.sameValue(typeof nf.formatRange(Infinity, -Infinity), "string",
    "should return string not throw RangeError");

assert.sameValue(typeof nf.formatRange(Infinity, -0), "string",
    "should return string not throw RangeError");


assert.sameValue(typeof nf.formatRange(-0, -1), "string",
    "should return string not throw RangeError");

assert.sameValue(typeof nf.formatRange(-0, -Infinity), "string",
    "should return string not throw RangeError");
