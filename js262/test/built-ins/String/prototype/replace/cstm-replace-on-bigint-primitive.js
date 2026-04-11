

/*---
esid: sec-string.prototype.replace
description: >
  If a searchValue is a bigint primitive, its Symbol.replace property is not accessed.
info: |
  String.prototype.replace ( searchValue, replaceValue )

  [...]
  2. If searchValue is not Object, then
    [...]
  [...]

features: [Symbol.replace]
---*/

Object.defineProperty(BigInt.prototype, Symbol.replace, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var searchValue = 1n;

const replaced = "a1b1c".replace(searchValue, "X");
assert.sameValue(replaced, "aXb1c");
