

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - properties can be added to prototype
    after current position are visited on an Array
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  if (idx === 1 && val === 6.99) {
    testResult = true;
  }
}

var arr = [0, , 2];

Object.defineProperty(arr, "0", {
  get: function() {
    Object.defineProperty(Array.prototype, "1", {
      get: function() {
        return 6.99;
      },
      configurable: true
    });
    return 0;
  },
  configurable: true
});

arr.forEach(callbackfn);

assert(testResult, 'testResult !== true');
