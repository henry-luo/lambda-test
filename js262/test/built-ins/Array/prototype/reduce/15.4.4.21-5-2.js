

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws TypeError if 'length' is 0
    (subclassed Array, length overridden to null (type conversion)),
    no initVal
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = null;

function cb() {}
assert.throws(TypeError, function() {
  f.reduce(cb);
});
