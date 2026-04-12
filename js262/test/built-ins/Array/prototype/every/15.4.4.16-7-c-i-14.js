

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 5;
  } else {
    return true;
  }
}

var arr = [];

Object.defineProperty(Array.prototype, "0", {
  get: function() {
    return 5;
  },
  configurable: true
});

Object.defineProperty(arr, "0", {
  get: function() {
    return 11;
  },
  configurable: true
});

assert.sameValue(arr.every(callbackfn), false, 'arr.every(callbackfn)');
