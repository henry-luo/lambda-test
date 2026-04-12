

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight - 'initialValue' is present
---*/

var str = "initialValue is present";

assert.sameValue([].reduceRight(function() {}, str), str, '[].reduceRight(function () { }, str)');
