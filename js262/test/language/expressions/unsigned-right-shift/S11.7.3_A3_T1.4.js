

/*---
info: Operator x >>> y returns ToNumber(x) >>> ToNumber(y)
es5id: 11.7.3_A3_T1.4
description: Type(x) and Type(y) vary between Null and Undefined
---*/


if (null >>> undefined !== 0) {
  throw new Test262Error('#1: null >>> undefined === 0. Actual: ' + (null >>> undefined));
}


if (undefined >>> null !== 0) {
  throw new Test262Error('#2: undefined >>> null === 0. Actual: ' + (undefined >>> null));
}


if (undefined >>> undefined !== 0) {
  throw new Test262Error('#3: undefined >>> undefined === 0. Actual: ' + (undefined >>> undefined));
}


if (null >>> null !== 0) {
  throw new Test262Error('#4: null >>> null === 0. Actual: ' + (null >>> null));
}
