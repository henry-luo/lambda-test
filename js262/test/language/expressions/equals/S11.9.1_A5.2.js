

/*---
info: |
    If Type(x) is Number and Type(y) is String,
    return the result of comparison x == ToNumber(y)
es5id: 11.9.1_A5.2
description: x is primitive number, y is primitive string
---*/


if ((1 == "1") !== true) {
  throw new Test262Error('#1: (1 == "1") === true');
}


if ((1.100 == "+1.10") !== true) {
  throw new Test262Error('#2: (1.100 == "+1.10") === true');
}


if ((1 == "true") !== false) {
  throw new Test262Error('#3: (1 == "true") === false');
}


if ((255 == "0xff") !== true) {
  throw new Test262Error('#4: (255 == "0xff") === true');
}


if ((0 == "") !== true) {
  throw new Test262Error('#5: (0 == "") === true');
}
