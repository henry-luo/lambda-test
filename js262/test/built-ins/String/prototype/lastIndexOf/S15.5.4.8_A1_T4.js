

/*---
info: String.prototype.lastIndexOf(searchString, position)
es5id: 15.5.4.8_A1_T4
description: >
    Call lastIndexOf(searchString, position) function without
    arguments of string
---*/


if ("".lastIndexOf() !== -1) {
  throw new Test262Error('#1: "".lastIndexOf() === -1. Actual: ' + ("".lastIndexOf()));
}

