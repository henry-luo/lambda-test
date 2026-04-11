

/*---
info: |
    If Type(x) is String and Type(y) is Object,
    return x != ToPrimitive(y)
es5id: 11.9.2_A7.7
description: y is object, x is primitive string
---*/


if (("1" != new Boolean(true)) !== false) {
  throw new Test262Error('#1: ("1" != new Boolean(true)) === false');
}


if (("-1" != new Number(-1)) !== false) {
  throw new Test262Error('#2: ("-1" != new Number(-1)) === false');
}


if (("x" != new String("x")) !== false) {
  throw new Test262Error('#3: ("x" != new String("x")) === false');
}
