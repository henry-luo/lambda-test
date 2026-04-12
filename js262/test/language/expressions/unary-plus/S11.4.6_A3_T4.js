

/*---
info: Operator +x returns ToNumber(x)
es5id: 11.4.6_A3_T4
description: Type(x) is undefined or null
---*/


if (isNaN(+void 0) !== true) {
  throw new Test262Error('#1: +void 0 === Not-a-Number. Actual: ' + (+void 0));
}


if (+null !== 0) {
  throw new Test262Error('#2: +null === 0. Actual: ' + (+null));
}
