

/*---
esid: sec-array.prototype.findindex
description: >
  Returns abrupt from getting property value from `this`.
info: |
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  7. Let k be 0.
  8. Repeat, while k < len
    a. Let Pk be ToString(k).
    b. Let kValue be Get(O, Pk).
    c. ReturnIfAbrupt(kValue).
  ...
---*/

var o = {
  length: 1
};

Object.defineProperty(o, 0, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  [].findIndex.call(o, function() {});
});
