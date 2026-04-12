

/*---
info: Operator ~x returns ~ToInt32(x)
es5id: 11.4.8_A3_T4
description: Type(x) is undefined or null
---*/


if (~void 0 !== -1) {
  throw new Test262Error('#1: ~void 0 === -1. Actual: ' + (~void 0));
}


if (~null !== -1) {
  throw new Test262Error('#2: ~null === -1. Actual: ' + (~null));
}
