

/*---
description: |
  Freezing a dictionary mode object with a length property should make Object.isFrozen report true
info: bugzilla.mozilla.org/show_bug.cgi?id=1312948
esid: pending
---*/


delete Array.prototype.slice;

Object.freeze(Array.prototype);
assert.sameValue(Object.isFrozen(Array.prototype), true);
