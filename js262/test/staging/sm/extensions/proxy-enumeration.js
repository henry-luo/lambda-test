

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var list = Object.getOwnPropertyNames(this);
var found = list.indexOf("Proxy") != -1;
assert.sameValue(found, true)
