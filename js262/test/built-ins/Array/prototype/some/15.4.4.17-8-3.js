

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some returns false if 'length' is 0 (subclassed
    Array, length overridden to false (type conversion))
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = false;

function cb() {}
var i = f.some(cb);


assert.sameValue(i, false, 'i');
