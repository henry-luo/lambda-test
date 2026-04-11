

/*---
info: String.prototype.lastIndexOf(searchString, position)
es5id: 15.5.4.8_A1_T7
description: >
    Call lastIndexOf(searchString, position) function with undefined
    argument of string object
---*/


if (String("undefined").lastIndexOf(undefined) !== 0) {
  throw new Test262Error('#1: String("undefined").lastIndexOf(undefined) === 0. Actual: ' + String("undefined").lastIndexOf(undefined));
}

