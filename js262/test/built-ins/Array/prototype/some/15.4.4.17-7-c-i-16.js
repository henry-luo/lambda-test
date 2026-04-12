

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - element to be retrieved is inherited
    accessor property on an Array
---*/

var kValue = "abc";

function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === kValue;
  }
  return false;
}

Object.defineProperty(Array.prototype, "1", {
  get: function() {
    return kValue;
  },
  configurable: true
});

assert([, , ].some(callbackfn), '[, , ].some(callbackfn) !== true');
