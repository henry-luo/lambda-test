

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - 'this' of 'callbackfn' is an String object
    when T is not an object (T is a string primitive)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return 'hello' === this.valueOf();
}

var obj = {
  0: 11,
  length: 2
};

assert(Array.prototype.every.call(obj, callbackfn, "hello"), 'Array.prototype.every.call(obj, callbackfn, "hello") !== true');
assert(accessed, 'accessed !== true');
