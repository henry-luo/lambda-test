

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight throws TypeError if 'length' is 0
    (subclassed Array, length overridden to '0' (type conversion)), no
    initVal
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = '0';

function cb() {}
assert.throws(TypeError, function() {
  f.reduceRight(cb);
});
