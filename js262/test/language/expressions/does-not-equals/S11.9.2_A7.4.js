

/*---
info: |
    If Type(x) is Object and Type(y) is Number,
    return ToPrimitive(x) != y
es5id: 11.9.2_A7.4
description: x is object, y is primitive number
---*/


if ((new Boolean(true) != 1) !== false) {
  throw new Test262Error('#1: (new Boolean(true) != 1) === false');
}


if ((new Number(-1) != -1) !== false) {
  throw new Test262Error('#2: (new Number(-1) != -1) === false');
}


if ((new String("-1") != -1) !== false) {
  throw new Test262Error('#3: (new String("-1") != -1) === false');
}
