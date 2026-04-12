

/*---
info: Operator x | y returns ToNumber(x) | ToNumber(y)
es5id: 11.10.3_A3_T2.6
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Undefined
---*/


if (("1" | undefined) !== 1) {
  throw new Test262Error('#1: ("1" | undefined) === 1. Actual: ' + (("1" | undefined)));
}


if ((undefined | "1") !== 1) {
  throw new Test262Error('#2: (undefined | "1") === 1. Actual: ' + ((undefined | "1")));
}


if ((new String("1") | undefined) !== 1) {
  throw new Test262Error('#3: (new String("1") | undefined) === 1. Actual: ' + ((new String("1") | undefined)));
}


if ((undefined | new String("1")) !== 1) {
  throw new Test262Error('#4: (undefined | new String("1")) === 1. Actual: ' + ((undefined | new String("1"))));
}
