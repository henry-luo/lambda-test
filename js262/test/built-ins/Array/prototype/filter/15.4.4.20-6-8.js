

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-6-8
description: >
    Array.prototype.filter returns an empty array if 'length' is 0
    (subclassed Array, length overridden with []
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();

f.length = [];


function cb() {}
var a = f.filter(cb);


assert(Array.isArray(a), 'Array.isArray(a) !== true');
assert.sameValue(a.length, 0, 'a.length');
