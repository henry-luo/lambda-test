

/*---
esid: sec-weakset.prototype.delete
description: >
  Return false if entry wasn't in the WeakSet.
info: |
  WeakSet.prototype.delete ( value )

  ...
  7. Return false.

---*/

var s = new WeakSet();

assert.sameValue(s.delete({}), false);
