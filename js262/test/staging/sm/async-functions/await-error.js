

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1317153;
var summary = "await outside of async function should provide better error";

print(BUGNUMBER + ": " + summary);

let caught = false;
try {
    eval("await 10");
} catch(e) {
    assert.sameValue(e.message.includes("await is only valid in"), true);
    caught = true;
}
assert.sameValue(caught, true);

