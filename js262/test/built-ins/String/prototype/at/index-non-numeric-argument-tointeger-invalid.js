

/*---
esid: sec-string.prototype.at
description: >
  Property type and descriptor.
info: |
  String.prototype.at( index )

  Let relativeIndex be ? ToInteger(index).

features: [String.prototype.at]
---*/
assert.sameValue(typeof String.prototype.at, 'function');

let s = "01";

assert.throws(TypeError, () => {
  s.at(Symbol());
});
