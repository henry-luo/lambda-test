

/*---
description: |
  Object.preventExtensions should be idempotent
info: bugzilla.mozilla.org/show_bug.cgi?id=599459
esid: pending
---*/

var obj = {};
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
assert.sameValue(Object.preventExtensions(obj), obj);
assert.sameValue(Object.isExtensible(obj), false);
