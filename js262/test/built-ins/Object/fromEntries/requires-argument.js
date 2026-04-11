

/*---
esid: sec-object.fromentries
description: Throws when called without an argument.
info: |
  Object.fromEntries ( iterable )

  1. Perform ? RequireObjectCoercible(iterable).
  ...

features: [Object.fromEntries]
---*/

assert.sameValue(typeof Object.fromEntries, 'function');
assert.throws(TypeError, function() {
  Object.fromEntries();
});
