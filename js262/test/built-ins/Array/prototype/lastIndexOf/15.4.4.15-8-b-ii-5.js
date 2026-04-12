

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf - search element is -NaN
---*/

assert.sameValue([+NaN, NaN, -NaN].lastIndexOf(-NaN), -1, '[+NaN, NaN, -NaN].lastIndexOf(-NaN)');
