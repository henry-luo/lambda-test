

/*---
info: |
    If Type(y) is Number and Type(y) is Boolean,
    return the result of comparison x == ToNumber(y)
es5id: 11.9.1_A3.3
description: x is primitive number, y is primitive boolean
---*/


if ((0 == false) !== true) {
  throw new Test262Error('#1: (0 == false) === true');
}


if (("1" == true) !== true) {
  throw new Test262Error('#2: ("1" == true) === true');
}
