

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - 'this' of 'callbackfn' is a Number object
    when T is not an object (T is a number primitive)
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === 5;
}

var obj = {
  0: 11,
  length: 1
};

assert(Array.prototype.some.call(obj, callbackfn, 5), 'Array.prototype.some.call(obj, callbackfn, 5) !== true');
