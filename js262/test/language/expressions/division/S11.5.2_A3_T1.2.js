

/*---
info: Operator x / y returns ToNumber(x) / ToNumber(y)
es5id: 11.5.2_A3_T1.2
description: Type(x) and Type(y) vary between primitive number and Number object
---*/


if (1 / 1 !== 1) {
  throw new Test262Error('#1: 1 / 1 === 1. Actual: ' + (1 / 1));
}


if (new Number(1) / 1 !== 1) {
  throw new Test262Error('#2: new Number(1) / 1 === 1. Actual: ' + (new Number(1) / 1));
}


if (1 / new Number(1) !== 1) {
  throw new Test262Error('#3: 1 / new Number(1) === 1. Actual: ' + (1 / new Number(1)));
}


if (new Number(1) / new Number(1) !== 1) {
  throw new Test262Error('#4: new Number(1) / new Number(1) === 1. Actual: ' + (new Number(1) / new Number(1)));
}
