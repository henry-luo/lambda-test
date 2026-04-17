

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var obj = {
  m() {
    super[0]?.a
  }
};

obj.m();

