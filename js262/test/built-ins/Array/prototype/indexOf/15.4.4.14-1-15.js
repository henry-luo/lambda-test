

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to Arguments object
---*/

function fun() {
  return arguments;
}
var obj = fun(1, true, 3);

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
