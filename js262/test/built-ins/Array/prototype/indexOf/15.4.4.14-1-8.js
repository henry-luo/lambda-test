

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to String object
---*/

var obj = new String("null");

assert.sameValue(Array.prototype.indexOf.call(obj, 'l'), 2, 'Array.prototype.indexOf.call(obj, "l")');
