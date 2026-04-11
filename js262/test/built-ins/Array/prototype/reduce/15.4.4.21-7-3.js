

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce returns initialValue if 'length' is 0 and
    initialValue is present (subclassed Array, length overridden to
    false (type conversion))
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = false;

function cb() {}
assert.sameValue(f.reduce(cb, 1), 1, 'f.reduce(cb,1)');
