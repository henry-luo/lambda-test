

/*---
esid: sec-string.prototype.search
description: >
  If a searchValue is a boolean primitive, its Symbol.search property is not accessed.
info: |
  String.prototype.search ( searchValue )

  [...]
  2. If searchValue is not Object, then
    [...]
  [...]

features: [Symbol.search]
---*/

Object.defineProperty(Boolean.prototype, Symbol.search, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var searchValue = true;

const searched = "atruebtruec".search(searchValue);
assert.sameValue(searched, 1);
