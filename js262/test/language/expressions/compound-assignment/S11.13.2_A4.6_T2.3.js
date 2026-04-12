

/*---
info: The production x <<= y is the same as x = x << y
es5id: 11.13.2_A4.6_T2.3
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Null
---*/

var x;


x = 1;
x <<= null;
if (x !== 1) {
  throw new Test262Error('#1: x = 1; x <<= null; x === 1. Actual: ' + (x));
}


x = null;
x <<= 1;
if (x !== 0) {
  throw new Test262Error('#2: x = null; x <<= 1; x === 0. Actual: ' + (x));
}


x = new Number(1);
x <<= null;
if (x !== 1) {
  throw new Test262Error('#3: x = new Number(1); x <<= null; x === 1. Actual: ' + (x));
}


x = null;
x <<= new Number(1);
if (x !== 0) {
  throw new Test262Error('#4: x = null; x <<= new Number(1); x === 0. Actual: ' + (x));
}
