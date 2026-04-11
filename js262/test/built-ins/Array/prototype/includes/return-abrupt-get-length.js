

/*---
esid: sec-array.prototype.includes
description: Return abrupt from Get(O, "length")
info: |
  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  2. Let len be ? ToLength(? Get(O, "length")).
  ...
features: [Array.prototype.includes]
---*/

var obj = {};

Object.defineProperty(obj, "length", {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  [].includes.call(obj, 7);
});
