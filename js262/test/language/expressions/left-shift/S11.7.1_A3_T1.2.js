

/*---
info: Operator x << y returns ToNumber(x) << ToNumber(y)
es5id: 11.7.1_A3_T1.2
description: Type(x) and Type(y) vary between primitive number and Number object
---*/


if (1 << 1 !== 2) {
  throw new Test262Error('#1: 1 << 1 === 2. Actual: ' + (1 << 1));
}


if (new Number(1) << 1 !== 2) {
  throw new Test262Error('#2: new Number(1) << 1 === 2. Actual: ' + (new Number(1) << 1));
}


if (1 << new Number(1) !== 2) {
  throw new Test262Error('#3: 1 << new Number(1) === 2. Actual: ' + (1 << new Number(1)));
}


if (new Number(1) << new Number(1) !== 2) {
  throw new Test262Error('#4: new Number(1) << new Number(1) === 2. Actual: ' + (new Number(1) << new Number(1)));
}
