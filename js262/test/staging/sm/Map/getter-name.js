

/*---
description: |
  Map getters should have get prefix
info: bugzilla.mozilla.org/show_bug.cgi?id=1180290
esid: pending
---*/

assert.sameValue(Object.getOwnPropertyDescriptor(Map, Symbol.species).get.name, "get [Symbol.species]");
assert.sameValue(Object.getOwnPropertyDescriptor(Map.prototype, "size").get.name, "get size");
