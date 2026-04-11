

/*---
info: The production x -= y is the same as x = x - y
es5id: 11.13.2_A4.5_T2.6
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Undefined
---*/

var x;


x = "1";
x -= undefined;
if (isNaN(x) !== true) {
  throw new Test262Error('#1: x = "1"; x -= undefined; x === Not-a-Number. Actual: ' + (x));
}


x = undefined;
x -= "1";
if (isNaN(x) !== true) {
  throw new Test262Error('#2: x = undefined; x -= "1"; x === Not-a-Number. Actual: ' + (x));
}


x = new String("1");
x -= undefined;
if (isNaN(x) !== true) {
  throw new Test262Error('#3: x = new String("1"); x -= undefined; x === Not-a-Number. Actual: ' + (x));
}


x = undefined;
x -= new String("1");
if (isNaN(x) !== true) {
  throw new Test262Error('#4: x = undefined; x -= new String("1"); x === Not-a-Number. Actual: ' + (x));
}
