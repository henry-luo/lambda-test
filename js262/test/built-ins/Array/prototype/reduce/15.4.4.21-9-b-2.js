

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - added properties in step 2 are visible
    here
---*/

var testResult = false;

function callbackfn(accum, val, idx, obj) {
  if (idx === 2 && val === "2") {
    testResult = true;
  }
}

var obj = {};

Object.defineProperty(obj, "length", {
  get: function() {
    obj[2] = "2";
    return 3;
  },
  configurable: true
});

Array.prototype.reduce.call(obj, callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
