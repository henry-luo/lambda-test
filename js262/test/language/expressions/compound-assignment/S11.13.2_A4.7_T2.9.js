

/*---
info: The production x >>= y is the same as x = x >> y
es5id: 11.13.2_A4.7_T2.9
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Null
---*/

var x;


x = true;
x >>= null;
if (x !== 1) {
  throw new Test262Error('#1: x = true; x >>= null; x === 1. Actual: ' + (x));
}


x = null;
x >>= true;
if (x !== 0) {
  throw new Test262Error('#2: x = null; x >>= true; x === 0. Actual: ' + (x));
}


x = new Boolean(true);
x >>= null;
if (x !== 1) {
  throw new Test262Error('#3: x = new Boolean(true); x >>= null; x === 1. Actual: ' + (x));
}


x = null;
x >>= new Boolean(true);
if (x !== 0) {
  throw new Test262Error('#4: x = null; x >>= new Boolean(true); x === 0. Actual: ' + (x));
}
