

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - properties added into own object after
    current position are visited on an Array
---*/

var arr = [0, , 2];

Object.defineProperty(arr, "0", {
  get: function() {
    Object.defineProperty(arr, "1", {
      get: function() {
        return 1;
      },
      configurable: true
    });
    return 0;
  },
  configurable: true
});

assert.sameValue(arr.indexOf(1), 1, 'arr.indexOf(1)');
