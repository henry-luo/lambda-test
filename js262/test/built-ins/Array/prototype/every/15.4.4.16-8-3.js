

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every returns true if 'length' is 0 (subclassed
    Array, length overridden to false (type conversion))
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = false;

function cb() {}
var i = f.every(cb);


assert.sameValue(i, true, 'i');
