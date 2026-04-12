

/*---
info: The production x |= y is the same as x = x | y
es5id: 11.13.2_A4.11_T2.1
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Boolean (primitive and object)
---*/

var x;


x = true;
x |= 1;
if (x !== 1) {
  throw new Test262Error('#1: x = true; x |= 1; x === 1. Actual: ' + (x));
}


x = 1;
x |= true;
if (x !== 1) {
  throw new Test262Error('#2: x = 1; x |= true; x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x |= 1;
if (x !== 1) {
  throw new Test262Error('#3: x = new Boolean(true); x |= 1; x === 1. Actual: ' + (x));
}


x = 1;
x |= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#4: x = 1; x |= new Boolean(true); x === 1. Actual: ' + (x));
}


x = true;
x |= new Number(1);
if (x !== 1) {
  throw new Test262Error('#5: x = true; x |= new Number(1); x === 1. Actual: ' + (x));
}


x = new Number(1);
x |= true;
if (x !== 1) {
  throw new Test262Error('#6: x = new Number(1); x |= true; x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x |= new Number(1);
if (x !== 1) {
  throw new Test262Error('#7: x = new Boolean(true); x |= new Number(1); x === 1. Actual: ' + (x));
}


x = new Number(1);
x |= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#8: x = new Number(1); x |= new Boolean(true); x === 1. Actual: ' + (x));
}
