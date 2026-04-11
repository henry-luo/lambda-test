

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to Boolean Object
---*/

var obj = new Boolean(false);
obj.length = 2;
obj[1] = true;

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
