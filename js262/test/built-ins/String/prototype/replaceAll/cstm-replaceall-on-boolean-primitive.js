

/*---
esid: sec-string.prototype.replaceall
description: >
  If a searchValue is a boolean primitive, its Symbol.replace property is not accessed.
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  [...]
  2. If searchValue is not Object, then
    [...]
  [...]

features: [Symbol.replace]
---*/

Object.defineProperty(Boolean.prototype, Symbol.replace, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var searchValue = true;

const replaced = "atruebtruec".replaceAll(searchValue, "X");
assert.sameValue(replaced, "aXbXc");
