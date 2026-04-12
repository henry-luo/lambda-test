

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws TypeError if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf), no
    initVal
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();

var o = {
  valueOf: function() {
    return 0;
  }
};
f.length = o;

function cb() {}
assert.throws(TypeError, function() {
  f.reduce(cb);
});
