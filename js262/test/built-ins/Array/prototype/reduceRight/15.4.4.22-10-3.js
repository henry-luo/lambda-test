

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight - subclassed array with length 1
---*/

foo.prototype = [1];

function foo() {}
var f = new foo();

function cb() {}

assert.sameValue(f.reduceRight(cb), 1, 'f.reduceRight(cb)');
