

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function f() {
    "use strict";
    return !this;
}
assert.sameValue(f.call(null), true);

