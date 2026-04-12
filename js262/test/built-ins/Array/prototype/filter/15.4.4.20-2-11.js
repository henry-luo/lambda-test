

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter applied to Array-like object, 'length' is
    own accessor property without a get function
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}

var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert.sameValue(accessed, false, 'accessed');
