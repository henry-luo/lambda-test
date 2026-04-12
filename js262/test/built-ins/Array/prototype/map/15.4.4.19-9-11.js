

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - returns an empty array if 'length' is 0
    (subclassed Array, length overridden with obj w/o valueOf
    (toString))
---*/

function Foo() {}
Foo.prototype = [1, 2, 3];

var f = new Foo();

var o = {
  toString: function() {
    return '0';
  }
};
f.length = o;


function cb() {}
var a = Array.prototype.map.call(f, cb);

assert(Array.isArray(a), 'Array.isArray(a) !== true');
assert.sameValue(a.length, 0, 'a.length');
