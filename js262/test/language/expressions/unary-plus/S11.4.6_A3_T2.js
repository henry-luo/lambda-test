

/*---
info: Operator +x returns ToNumber(x)
es5id: 11.4.6_A3_T2
description: Type(x) is number primitive or Number object
---*/


if (+0.1 !== 0.1) {
  throw new Test262Error('#1: +0.1 === 0.1. Actual: ' + (+0.1));
}


if (+new Number(-1.1) !== -1.1) {
  throw new Test262Error('#2: +new Number(-1.1) === -1.1. Actual: ' + (+new Number(-1.1)));
}
