

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

var accessed = false;
var arrProtoLen;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}

arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;

assert([12, 11].reduceRight(callbackfn, 11), '[12, 11].reduceRight(callbackfn, 11) !== true');
assert(accessed, 'accessed !== true');
