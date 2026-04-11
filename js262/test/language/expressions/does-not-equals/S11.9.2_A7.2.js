

/*---
info: |
    If Type(x) is Object and Type(y) is Boolean,
    return ToPrimitive(x) != y
es5id: 11.9.2_A7.2
description: x is object, y is primitive boolean
---*/


if ((new Boolean(true) != true) !== false) {
  throw new Test262Error('#1: (new Boolean(true) != true) === false');
}


if ((new Number(1) != true) !== false) {
  throw new Test262Error('#2: (new Number(1) != true) === false');
}


if ((new String("1") != true) !== false) {
  throw new Test262Error('#3: (new String("1") != true) === false');
}
