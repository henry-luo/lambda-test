

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - added properties in step 2 are visible
    here
---*/

var obj = {};

Object.defineProperty(obj, "length", {
  get: function() {
    obj[1] = "accumulator";
    return 3;
  },
  configurable: true
});

assert.sameValue(Array.prototype.reduce.call(obj, function() {}), "accumulator", 'Array.prototype.reduce.call(obj, function () { })');
