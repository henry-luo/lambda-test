

/*---
esid: sec-array.prototype.splice
description: Abrupt completion from `constructor` property access
info: |
    [...]
    9. Let A be ? ArraySpeciesCreate(O, actualDeleteCount).
    [...]

    9.4.2.3 ArraySpeciesCreate

    [...]
    5. Let C be ? Get(originalArray, "constructor").
---*/

var a = [];

Object.defineProperty(a, 'constructor', {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  a.splice();
});
