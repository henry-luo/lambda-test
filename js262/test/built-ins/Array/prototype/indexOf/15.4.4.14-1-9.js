

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to Function object
---*/

var obj = function(a, b) {
  return a + b;
};
obj[1] = true;

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
