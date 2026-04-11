

/*---
info: |
    If Type(x) is Boolean and Type(y) is Object,
    return x == ToPrimitive(y)
es5id: 11.9.1_A7.3
description: y is object, x is primitive boolean
---*/


if ((true == new Boolean(true)) !== true) {
  throw new Test262Error('#1: (true == new Boolean(true)) === true');
}


if ((true == new Number(1)) !== true) {
  throw new Test262Error('#2: (true == new Number(1)) === true');
}


if ((true == new String("+1")) !== true) {
  throw new Test262Error('#3: (true == new String("+1")) === true');
}
