

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight applied to boolean primitive
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj instanceof Boolean;
}

Boolean.prototype[0] = 1;
Boolean.prototype.length = 1;

assert(Array.prototype.reduceRight.call(false, callbackfn, 1), 'Array.prototype.reduceRight.call(false, callbackfn, 1) !== true');
assert(accessed, 'accessed !== true');
