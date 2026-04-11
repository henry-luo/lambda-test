

/*---
esid: sec-array.prototype.with
description: >
  Array.prototype.with limits the length to 2 ** 32 - 1
info: |
  Array.prototype.with ( index, value )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
  7. Let A be ? ArrayCreate(𝔽(len)).
  ...

  ArrayCreate ( length [, proto ] )

  1. If length > 2 ** 32 - 1, throw a RangeError exception.
features: [change-array-by-copy, exponentiation]
---*/


var arrayLike = {
  get "0"() {
    throw new Test262Error("Get 0");
  },
  get "4294967295" () { 
    throw new Test262Error("Get 4294967295");
  },
  get "4294967296" () { 
    throw new Test262Error("Get 4294967296");
  },
  length: 2 ** 32
};

assert.throws(RangeError, function() {
  Array.prototype.with.call(arrayLike, 0, 0);
});
