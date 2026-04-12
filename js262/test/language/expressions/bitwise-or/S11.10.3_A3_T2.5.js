

/*---
info: Operator x | y returns ToNumber(x) | ToNumber(y)
es5id: 11.10.3_A3_T2.5
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Boolean (primitive and object)
---*/


if ((true | "1") !== 1) {
  throw new Test262Error('#1: (true | "1") === 1. Actual: ' + ((true | "1")));
}


if (("1" | true) !== 1) {
  throw new Test262Error('#2: ("1" | true) === 1. Actual: ' + (("1" | true)));
}


if ((new Boolean(true) | "1") !== 1) {
  throw new Test262Error('#3: (new Boolean(true) | "1") === 1. Actual: ' + ((new Boolean(true) | "1")));
}


if (("1" | new Boolean(true)) !== 1) {
  throw new Test262Error('#4: ("1" | new Boolean(true)) === 1. Actual: ' + (("1" | new Boolean(true))));
}


if ((true | new String("1")) !== 1) {
  throw new Test262Error('#5: (true | new String("1")) === 1. Actual: ' + ((true | new String("1"))));
}


if ((new String("1") | true) !== 1) {
  throw new Test262Error('#6: (new String("1") | true) === 1. Actual: ' + ((new String("1") | true)));
}


if ((new Boolean(true) | new String("1")) !== 1) {
  throw new Test262Error('#7: (new Boolean(true) | new String("1")) === 1. Actual: ' + ((new Boolean(true) | new String("1"))));
}


if ((new String("1") | new Boolean(true)) !== 1) {
  throw new Test262Error('#8: (new String("1") | new Boolean(true)) === 1. Actual: ' + ((new String("1") | new Boolean(true))));
}
