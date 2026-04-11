

/*---
info: |
    If Type(x) is Boolean and Type(y) is Number,
    return the result of comparison ToNumber(x) == y
es5id: 11.9.1_A3.2
description: x is primitive boolean, y is primitive number
---*/


if ((true == 1) !== true) {
  throw new Test262Error('#1: (true == 1) === true');
}


if ((false == "0") !== true) {
  throw new Test262Error('#2: (false == "0") === true');
}
