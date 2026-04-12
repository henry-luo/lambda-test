

/*---
info: Operator x % y returns ToNumber(x) % ToNumber(y)
es5id: 11.5.3_A3_T2.9
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Null
---*/


if (isNaN(true % null) !== true) {
  throw new Test262Error('#1: true % null === Not-a-Number. Actual: ' + (true % null));
}


if (null % true !== 0) {
  throw new Test262Error('#2: null % true === 0. Actual: ' + (null % true));
}


if (isNaN(new Boolean(true) % null) !== true) {
  throw new Test262Error('#3: new Boolean(true) % null === Not-a-Number. Actual: ' + (new Boolean(true) % null));
}


if (null % new Boolean(true) !== 0) {
  throw new Test262Error('#4: null % new Boolean(true) === 0. Actual: ' + (null % new Boolean(true)));
}
