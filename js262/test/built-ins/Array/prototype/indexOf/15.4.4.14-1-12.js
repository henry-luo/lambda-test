

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to RegExp object
---*/

var obj = new RegExp();
obj.length = 2;
obj[1] = true;

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
