

/*---
info: |
    If Type(x) is String and Type(y) is Object,
    return x == ToPrimitive(y)
es5id: 11.9.1_A7.7
description: y is object, x is primitive string
---*/


if (("1" == new Boolean(true)) !== true) {
  throw new Test262Error('#1: ("1" == new Boolean(true)) === true');
}


if (("-1" == new Number(-1)) !== true) {
  throw new Test262Error('#2: ("-1" == new Number(-1)) === true');
}


if (("x" == new String("x")) !== true) {
  throw new Test262Error('#3: ("x" == new String("x")) === true');
}
