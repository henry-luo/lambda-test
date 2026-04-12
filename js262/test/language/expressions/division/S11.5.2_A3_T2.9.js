

/*---
info: Operator x / y returns ToNumber(x) / ToNumber(y)
es5id: 11.5.2_A3_T2.9
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Null
---*/


if (true / null !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#1: true / null === +Infinity. Actual: ' + (true / null));
}


if (null / true !== 0) {
  throw new Test262Error('#2: null / true === 0. Actual: ' + (null / true));
}


if (new Boolean(true) / null !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#3: new Boolean(true) / null === +Infinity. Actual: ' + (new Boolean(true) / null));
}


if (null / new Boolean(true) !== 0) {
  throw new Test262Error('#4: null / new Boolean(true) === 0. Actual: ' + (null / new Boolean(true)));
}
