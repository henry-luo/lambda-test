

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to Error object
---*/

var obj = new SyntaxError();
obj[1] = true;
obj.length = 2;

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
