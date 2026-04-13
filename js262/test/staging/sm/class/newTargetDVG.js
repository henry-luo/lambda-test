

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function thunk() {
    new.target();
}
assertThrownErrorContains(thunk, "new.target");

