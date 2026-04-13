

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
try {
    new {prototype: TypeError.prototype};
} catch (e) {}

