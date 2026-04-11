

/*---
info: Operator x * y returns ToNumber(x) * ToNumber(y)
es5id: 11.5.1_A3_T2.3
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Null
---*/


if (1 * null !== 0) {
  throw new Test262Error('#1: 1 * null === 0. Actual: ' + (1 * null));
}


if (null * 1 !== 0) {
  throw new Test262Error('#2: null * 1 === 0. Actual: ' + (null * 1));
}


if (new Number(1) * null !== 0) {
  throw new Test262Error('#3: new Number(1) * null === 0. Actual: ' + (new Number(1) * null));
}


if (null * new Number(1) !== 0) {
  throw new Test262Error('#4: null * new Number(1) === 0. Actual: ' + (null * new Number(1)));
}
