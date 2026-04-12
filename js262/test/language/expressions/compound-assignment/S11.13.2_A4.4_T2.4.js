

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.4
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Undefined
---*/

var x;


x = true;
x += undefined;
if (isNaN(x) !== true) {
  throw new Test262Error('#1: x = true; x += undefined; x === Not-a-Number. Actual: ' + (x));
}


x = undefined;
x += true;
if (isNaN(x) !== true) {
  throw new Test262Error('#2: x = undefined; x += true; x === Not-a-Number. Actual: ' + (x));
}


x = new Boolean(true);
x += undefined;
if (isNaN(x) !== true) {
  throw new Test262Error('#3: x = new Boolean(true); x += undefined; x === Not-a-Number. Actual: ' + (x));
}


x = undefined;
x += new Boolean(true);
if (isNaN(x) !== true) {
  throw new Test262Error('#4: x = undefined; x += new Boolean(true); x === Not-a-Number. Actual: ' + (x));
}
