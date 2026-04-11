

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T6
description: >
    Call indexOf(searchString, position) function with x argument of
    new String object, where x is undefined variable
---*/


if (new String("undefined").indexOf(x) !== 0) {
  throw new Test262Error('#1: var x; new String("undefined").indexOf(x) === 0. Actual: ' + new String("undefined").indexOf(x));
}


var x;
