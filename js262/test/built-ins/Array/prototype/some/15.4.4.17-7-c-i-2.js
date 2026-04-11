

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - element to be retrieved is own data
    property on an Array
---*/

var kValue = {};

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return kValue === val;
  }
  return false;
}

assert([kValue].some(callbackfn), '[kValue].some(callbackfn) !== true');
