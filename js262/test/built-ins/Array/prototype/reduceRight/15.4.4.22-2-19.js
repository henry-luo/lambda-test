

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight applied to Function object, which
    implements its own property get method
---*/

var accessed = false;
var fun = function(a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}

assert(Array.prototype.reduceRight.call(fun, callbackfn, 11), 'Array.prototype.reduceRight.call(fun, callbackfn, 11) !== true');
assert(accessed, 'accessed !== true');
