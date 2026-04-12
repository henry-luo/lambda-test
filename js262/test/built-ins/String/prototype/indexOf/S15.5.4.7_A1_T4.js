

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T4
description: >
    Call indexOf(searchString, position) function without arguments of
    string
---*/


if ("".indexOf() !== -1) {
  throw new Test262Error('#1: "".indexOf() === -1. Actual: ' + ("".indexOf()));
}

