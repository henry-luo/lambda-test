

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T7
description: >
    Call indexOf(searchString, position) function with undefined
    argument of string object
---*/


if (String("undefined").indexOf(undefined) !== 0) {
  throw new Test262Error('#1: String("undefined").indexOf(undefined) === 0. Actual: ' + String("undefined").indexOf(undefined));
}

