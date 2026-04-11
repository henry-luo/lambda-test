

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T6
description: >
    Arguments are x and number, and instance is new String, x is
    undefined variable
---*/


if (new String("undefined").slice(x, 3) !== "und") {
  throw new Test262Error('#1: var x; new String("undefined").slice(x,3) === "und". Actual: ' + new String("undefined").slice(x, 3));
}


var x;
