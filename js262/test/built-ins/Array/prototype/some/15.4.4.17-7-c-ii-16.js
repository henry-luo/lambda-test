

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - 'this' of 'callback' is a Boolean object
    when 'T' is not an object ('T' is a boolean primitive)
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}

var obj = {
  0: 11,
  length: 1
};

assert(Array.prototype.some.call(obj, callbackfn, false), 'Array.prototype.some.call(obj, callbackfn, false) !== true');
