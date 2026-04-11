

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - search element is -NaN
---*/

assert.sameValue([+NaN, NaN, -NaN].indexOf(-NaN), -1, '[+NaN, NaN, -NaN].indexOf(-NaN)');
