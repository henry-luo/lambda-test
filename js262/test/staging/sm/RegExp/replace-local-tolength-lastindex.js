

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


for (var flag of ["", "g", "y", "gy"]) {
    var regExp = new RegExp("a", flag);

    var called = false;
    regExp.lastIndex = {
        valueOf() {
            assert.sameValue(called, false);
            called = true;
            return 0;
        }
    };

    assert.sameValue(called, false);
    regExp[Symbol.replace]("");
    assert.sameValue(called, !flag.includes("g"));
}

