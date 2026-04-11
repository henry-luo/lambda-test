

/*---
info: Operator -x returns -ToNumber(x)
es5id: 11.4.7_A3_T1
description: Type(x) is boolean primitive or Boolean object
---*/


if (-false !== 0) {
  throw new Test262Error('#1: -false === 0. Actual: ' + (-false));
}


if (-new Boolean(true) !== -1) {
  throw new Test262Error('#2: -new Boolean(true) === -1. Actual: ' + (-new Boolean(true)));
}
