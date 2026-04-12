

/*---
esid: sec-array.prototype.includes
description: Return abrupt from ToNumber("length")
info: |
  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  2. Let len be ? ToLength(? Get(O, "length")).
  ...
features: [Array.prototype.includes]
---*/

var obj1 = {
  length: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};

var obj2 = {
  length: {
    toString: function() {
      throw new Test262Error();
    }
  }
};

assert.throws(Test262Error, function() {
  [].includes.call(obj1);
}, "valueOf");

assert.throws(Test262Error, function() {
  [].includes.call(obj2);
}, "toString");
