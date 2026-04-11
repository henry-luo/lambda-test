

/*---
info: |
    If Type(x) is String and Type(y) is Number,
    return the result of comparison ToNumber(x) == y
es5id: 11.9.1_A5.3
description: x is primitive string, y is primitive number
---*/


if (("-1" == -1) !== true) {
  throw new Test262Error('#1: ("-1" == -1) === true');
}


if (("-1.100" == -1.10) !== true) {
  throw new Test262Error('#2: ("-1.100" == -1.10) === true');
}


if (("false" == 0) !== false) {
  throw new Test262Error('#3: ("false" == 0) === false');
}


if (("5e-324" == 5e-324) !== true) {
  throw new Test262Error('#4: ("5e-324" == 5e-324) === true');
}
