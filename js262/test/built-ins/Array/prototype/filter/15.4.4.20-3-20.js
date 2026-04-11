

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - value of 'length' is an Object which has
    an own valueOf method.
---*/

function callbackfn(val, idx, obj) {
  return true;
}

var obj = {
  1: 11,
  2: 9,
  length: {
    valueOf: function() {
      return 2;
    }
  }
};

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
