

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() =>
({
    method() {
        (function () {
            eval('super.toString');
        })();
    }
}).method(), SyntaxError);

