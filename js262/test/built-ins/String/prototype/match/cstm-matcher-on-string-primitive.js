

/*---
esid: sec-string.prototype.match
description: >
  If a regexp property is a string primitive, its Symbol.match property is not accessed.
info: |
  String.prototype.match ( regexp )

  [...]
  2. If regexp is not Object, then
    [...]
  [...]

includes: [compareArray.js]
features: [Symbol.match]
---*/

Object.defineProperty(String.prototype, Symbol.match, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var separator = ",";

const matched = "a,b,c".match(separator);
assert.sameValue(matched.index, 1);
assert.sameValue(matched.input, "a,b,c");
assert.compareArray(matched, [","]);
