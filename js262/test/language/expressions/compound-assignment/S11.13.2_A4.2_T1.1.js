

/*---
info: The production x /= y is the same as x = x / y
es5id: 11.13.2_A4.2_T1.1
description: >
    Type(x) and Type(y) vary between primitive boolean and Boolean
    object
---*/

var x;


x = true;
x /= true;
if (x !== 1) {
  throw new Test262Error('#1: x = true; x /= true; x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x /= true;
if (x !== 1) {
  throw new Test262Error('#2: x = new Boolean(true); x /= true; x === 1. Actual: ' + (x));
}


x = true;
x /= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#3: x = true; x /= new Boolean(true); x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x /= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#4: x = new Boolean(true); x /= new Boolean(true); x === 1. Actual: ' + (x));
}
