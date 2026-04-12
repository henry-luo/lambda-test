

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - subclassed array with length 1 and
    initialvalue provided
---*/

foo.prototype = [1];

function foo() {}
var f = new foo();

function cb(prevVal, curVal, idx, obj) {
  return prevVal + curVal;
}

assert.sameValue(f.reduce(cb, -1), 0, 'f.reduce(cb,-1)');
