

/*---
info: |
    If Type(x) is Object and Type(y) is String,
    return ToPrimitive(x) != y
es5id: 11.9.2_A7.6
description: x is object, y is primitive string
---*/


if ((new Boolean(true) != "1") !== false) {
  throw new Test262Error('#1: (new Boolean(true) != "1") === false');
}


if ((new Number(-1) != "-1") !== false) {
  throw new Test262Error('#2: (new Number(-1) != "-1") === false');
}


if ((new String("x") != "x") !== false) {
  throw new Test262Error('#3: (new String("x") != "x") === false');
}
