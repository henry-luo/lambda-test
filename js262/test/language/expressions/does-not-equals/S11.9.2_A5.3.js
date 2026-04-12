

/*---
info: |
    If Type(x) is String and Type(y) is Number,
    return the result of comparison ToNumber(x) != y
es5id: 11.9.2_A5.3
description: x is primitive string, y is primitive number
---*/


if (("-1" != -1) !== false) {
  throw new Test262Error('#1: ("-1" != -1) === false');
}


if (("-1.100" != -1.10) !== false) {
  throw new Test262Error('#2: ("-1.100" != -1.10) === false');
}


if (("false" != 0) !== true) {
  throw new Test262Error('#3: ("false" != 0) === true');
}


if (("5e-324" != 5e-324) !== false) {
  throw new Test262Error('#4: ("5e-324" != 5e-324) === false');
}
