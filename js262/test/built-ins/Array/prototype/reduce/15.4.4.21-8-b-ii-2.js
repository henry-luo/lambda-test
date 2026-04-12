

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - deleted properties in step 2 are visible
    here
---*/

var obj = {
  1: "accumulator",
  2: "another"
};

Object.defineProperty(obj, "length", {
  get: function() {
    delete obj[1];
    return 3;
  },
  configurable: true
});

assert.notSameValue(Array.prototype.reduce.call(obj, function() {}), "accumulator", 'Array.prototype.reduce.call(obj, function () { })');
