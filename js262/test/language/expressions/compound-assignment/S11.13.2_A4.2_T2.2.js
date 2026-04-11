

/*---
info: The production x /= y is the same as x = x / y
es5id: 11.13.2_A4.2_T2.2
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and String (primitive and object)
---*/

var x;


x = "1";
x /= 1;
if (x !== 1) {
  throw new Test262Error('#1: x = "1"; x /= 1; x === 1. Actual: ' + (x));
}


x = 1;
x /= "1";
if (x !== 1) {
  throw new Test262Error('#2: x = 1; x /= "1"; x === 1. Actual: ' + (x));
}


x = new String("1");
x /= 1;
if (x !== 1) {
  throw new Test262Error('#3: x = new String("1"); x /= 1; x === 1. Actual: ' + (x));
}


x = 1;
x /= new String("1");
if (x !== 1) {
  throw new Test262Error('#4: x = 1; x /= new String("1"); x === 1. Actual: ' + (x));
}


x = "1";
x /= new Number(1);
if (x !== 1) {
  throw new Test262Error('#5: x = "1"; x /= new Number(1); x === 1. Actual: ' + (x));
}


x = new Number(1);
x /= "1";
if (x !== 1) {
  throw new Test262Error('#6: x = new Number(1); x /= "1"; x === 1. Actual: ' + (x));
}


x = new String("1");
x /= new Number(1);
if (x !== 1) {
  throw new Test262Error('#7: x = new String("1"); x /= new Number(1); x === 1. Actual: ' + (x));
}


x = new Number(1);
x /= new String("1");
if (x !== 1) {
  throw new Test262Error('#8: x = new Number(1); x /= new String("1"); x === 1. Actual: ' + (x));
}


x = "x";
x /= 1;
if (isNaN(x) !== true) {
  throw new Test262Error('#9: x = "x"; x /= 1; x === Not-a-Number. Actual: ' + (x));
}


x = 1;
x /= "x";
if (isNaN(x) !== true) {
  throw new Test262Error('#10: x = 1; x /= "x"; x === Not-a-Number. Actual: ' + (x));
}
