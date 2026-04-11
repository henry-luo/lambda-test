

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight - 'initialValue' is not present
---*/

var str = "initialValue is not present";

assert.sameValue([str].reduceRight(function() {}), str, '[str].reduceRight(function () { })');
