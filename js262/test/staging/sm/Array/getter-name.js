

/*---
description: |
  Array getters should have get prefix
info: bugzilla.mozilla.org/show_bug.cgi?id=1180290
esid: pending
---*/

assert.sameValue(Object.getOwnPropertyDescriptor(Array, Symbol.species).get.name, "get [Symbol.species]");
