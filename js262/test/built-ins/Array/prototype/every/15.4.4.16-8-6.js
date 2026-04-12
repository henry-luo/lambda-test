

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every returns true if 'length' is 0 (subclassed
    Array, length overridden with obj with valueOf)
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
var i = f.every(cb);


assert.sameValue(i, true, 'i');
