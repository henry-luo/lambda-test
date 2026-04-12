

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - subclassed array when length to 1
    and initialvalue provided
---*/

foo.prototype = [1];

function foo() {}
var f = new foo();

function cb(prevVal, curVal, idx, obj) {
  return prevVal + curVal;
}

assert.sameValue(f.reduceRight(cb, "4"), "41", 'f.reduceRight(cb,"4")');
