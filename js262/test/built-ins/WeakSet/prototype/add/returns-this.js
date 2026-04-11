

/*---
esid: sec-weakset.prototype.add
description: Returns `this` after adding a new value.
info: |
  WeakSet.prototype.add ( value )

  1. Let S be this value.
  ...
  8. Return S.

---*/

var s = new WeakSet();

assert.sameValue(s.add({}), s, '`s.add({})` returns `s`');
