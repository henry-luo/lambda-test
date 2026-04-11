

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf applied to Function object which
    implements its own property get method
---*/

var obj = function(a, b) {
  return a + b;
};
obj[1] = "b";
obj[2] = "c";

assert.sameValue(Array.prototype.indexOf.call(obj, obj[1]), 1, 'Array.prototype.indexOf.call(obj, obj[1])');
assert.sameValue(Array.prototype.indexOf.call(obj, obj[2]), -1, 'Array.prototype.indexOf.call(obj, obj[2])');
