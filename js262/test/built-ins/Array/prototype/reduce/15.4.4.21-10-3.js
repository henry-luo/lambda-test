

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - subclassed array of length 1
---*/

foo.prototype = [1];

function foo() {}
var f = new foo();

function cb() {}

assert.sameValue(f.reduce(cb), 1, 'f.reduce(cb)');
