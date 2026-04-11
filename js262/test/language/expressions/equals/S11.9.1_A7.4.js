

/*---
info: |
    If Type(x) is Object and Type(y) is Number,
    return ToPrimitive(x) == y
es5id: 11.9.1_A7.4
description: x is object, y is primitive number
---*/


if ((new Boolean(true) == 1) !== true) {
  throw new Test262Error('#1: (new Boolean(true) == 1) === true');
}


if ((new Number(-1) == -1) !== true) {
  throw new Test262Error('#2: (new Number(-1) == -1) === true');
}


if ((new String("-1") == -1) !== true) {
  throw new Test262Error('#3: (new String("-1") == -1) === true');
}
