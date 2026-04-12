

/*---
info: |
    If Type(x) is Number and Type(y) is Object,
    return x != ToPrimitive(y)
es5id: 11.9.2_A7.5
description: y is object, x is primitive number
---*/


if ((1 != new Boolean(true)) !== false) {
  throw new Test262Error('#1: (1 != new Boolean(true)) === false');
}


if ((-1 != new Number(-1)) !== false) {
  throw new Test262Error('#2: (-1 != new Number(-1)) === false');
}


if ((-1 != new String("-1")) !== false) {
  throw new Test262Error('#3: (-1 != new String("-1")) === false');
}
