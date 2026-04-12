

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - element to be retrieved is own accessor
    property that overrides an inherited data property on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 10;
  } else {
    return true;
  }
}

var arr = [];

Array.prototype[0] = 10;

Object.defineProperty(arr, "0", {
  get: function() {
    return 111;
  },
  configurable: true
});

assert.sameValue(arr.every(callbackfn), false, 'arr.every(callbackfn)');
