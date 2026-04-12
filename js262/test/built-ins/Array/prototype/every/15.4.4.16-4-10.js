

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-10
description: >
    Array.prototype.every - the exception is not thrown if exception
    was thrown by step 2
---*/

var obj = {
  0: 11,
  1: 12
};

Object.defineProperty(obj, "length", {
  get: function() {
    throw new Test262Error();
  },
  configurable: true
});

assert.throws(Test262Error, function() {
  Array.prototype.every.call(obj, undefined);
});
