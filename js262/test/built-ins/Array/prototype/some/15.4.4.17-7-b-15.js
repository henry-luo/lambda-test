

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - decreasing length of array with prototype
    property causes prototype index property to be visited
---*/

function callbackfn(val, idx, obj) {
  if (idx === 2 && val === "prototype") {
    return true;
  } else {
    return false;
  }
}
var arr = [0, 1, 2];

Object.defineProperty(Array.prototype, "2", {
  get: function() {
    return "prototype";
  },
  configurable: true
});

Object.defineProperty(arr, "1", {
  get: function() {
    arr.length = 2;
    return 1;
  },
  configurable: true
});

assert(arr.some(callbackfn), 'arr.some(callbackfn) !== true');
