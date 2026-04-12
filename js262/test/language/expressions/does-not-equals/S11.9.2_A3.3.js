

/*---
info: |
    If Type(y) is Number and Type(y) is Boolean,
    return the result of comparison x != ToNumber(y)
es5id: 11.9.2_A3.3
description: x is primitive number, y is primitive boolean
---*/


if ((0 != false) !== false) {
  throw new Test262Error('#1: (0 != false) === false');
}


if (("1" != true) !== false) {
  throw new Test262Error('#2: ("1" != true) === false');
}


if ((new Boolean(false) != false) !== false) {
  throw new Test262Error('#3: (new Boolean(false) != false) === false');
}


if (({valueOf: function () {return "0"}} != false) !== false) {
  throw new Test262Error('#4: ({valueOf: function () {return "0"}} != false) === false');
}
