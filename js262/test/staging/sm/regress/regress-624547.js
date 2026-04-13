

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function f(x) {
    delete arguments[0];
    for(var i=0; i<20; i++) {
        arguments[0] !== undefined;
    }
}


f(1);

