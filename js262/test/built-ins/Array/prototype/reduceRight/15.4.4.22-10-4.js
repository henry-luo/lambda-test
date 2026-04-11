

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - subclassed array with length more
    than 1
---*/

foo.prototype = new Array(0, 1, 2, 3);

function foo() {}
var f = new foo();

function cb(prevVal, curVal, idx, obj) {
  return prevVal + curVal;
}

assert.sameValue(f.reduceRight(cb), 6, 'f.reduceRight(cb)');
