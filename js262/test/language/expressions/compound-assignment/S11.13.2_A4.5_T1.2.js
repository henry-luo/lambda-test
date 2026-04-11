

/*---
info: The production x -= y is the same as x = x - y
es5id: 11.13.2_A4.5_T1.2
description: Type(x) and Type(y) vary between primitive number and Number object
---*/

var x;


x = 1;
x -= 1;
if (x !== 0) {
  throw new Test262Error('#1: x = 1; x -= 1; x === 0. Actual: ' + (x));
}


x = new Number(1);
x -= 1;
if (x !== 0) {
  throw new Test262Error('#2: x = new Number(1); x -= 1; x === 0. Actual: ' + (x));
}


x = 1;
x -= new Number(1);
if (x !== 0) {
  throw new Test262Error('#3: x = 1; x -= new Number(1); x === 0. Actual: ' + (x));
}


x = new Number(1);
x -= new Number(1);
if (x !== 0) {
  throw new Test262Error('#4: x = new Number(1); x -= new Number(1); x === 0. Actual: ' + (x));
}
