

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - returns an empty array if 'length' is 0
    (subclassed Array, length overridden with [])
---*/

function Foo() {}
Foo.prototype = [1, 2, 3];
var f = new Foo();

f.length = [];


function cb() {}
var a = Array.prototype.map.call(f, cb);

assert(Array.isArray(a), 'Array.isArray(a) !== true');
assert.sameValue(a.length, 0, 'a.length');
