

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var x;
function check(code, msg) {
    assertThrowsInstanceOfWithMessage(
        () => eval(code),
        TypeError,
        msg);
}

x = {};
check("for (var v of x) throw fit;", "x is not iterable");
check("[...x]", "x is not iterable");
check("Math.hypot(...x)", "x is not iterable");

x[Symbol.iterator] = "potato";
check("for (var v of x) throw fit;", "x is not iterable");

x[Symbol.iterator] = {};
check("for (var v of x) throw fit;", "x[Symbol.iterator] is not a function");

