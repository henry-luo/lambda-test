

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight applied to the Arguments object, which
    implements its own property get method
---*/

var arg;
var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}

var func = function(a, b) {
  arg = arguments;
  return Array.prototype.reduceRight.call(arguments, callbackfn, 11);
};

assert(func(12, 11), 'func(12, 11) !== true');
assert(accessed, 'accessed !== true');
