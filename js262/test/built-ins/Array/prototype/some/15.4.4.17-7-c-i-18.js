

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - element to be retrieved is own accessor
    property without a get function on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return typeof val === "undefined";
  }
  return false;
}

var arr = [];

Object.defineProperty(arr, "0", {
  set: function() {},
  configurable: true
});

assert(arr.some(callbackfn), 'arr.some(callbackfn) !== true');
