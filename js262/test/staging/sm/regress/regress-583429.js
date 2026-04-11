

/*---
description: |
  pending
esid: pending
---*/
assert.sameValue(Object.getOwnPropertyNames(Array.prototype).indexOf("length") >= 0, true);

assert.sameValue("ok", "ok", "bug 583429");
