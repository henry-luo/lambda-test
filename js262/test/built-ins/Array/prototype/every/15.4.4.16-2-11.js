

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every applied to Array-like object, 'length' is an
    own accessor property without a get function
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}

var obj = {
  0: 9,
  1: 8
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

assert(Array.prototype.every.call(obj, callbackfn), 'Array.prototype.every.call(obj, callbackfn) !== true');
assert.sameValue(accessed, false, 'accessed');
