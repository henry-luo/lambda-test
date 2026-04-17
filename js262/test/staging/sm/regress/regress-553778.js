

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function f() {
    function g() {
        function h() {
            g; x;
        }
        var [x] = [];
    }
}

