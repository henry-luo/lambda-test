

/*---
info: The production x -= y is the same as x = x - y
es5id: 11.13.2_A4.5_T2.7
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Null
---*/

var x;


x = "1";
x -= null;
if (x !== 1) {
  throw new Test262Error('#1: x = "1"; x -= null; x === 1. Actual: ' + (x));
}


x = null;
x -= "1";
if (x !== -1) {
  throw new Test262Error('#2: x = null; x -= "1"; x === -1. Actual: ' + (x));
}


x = new String("1");
x -= null;
if (x !== 1) {
  throw new Test262Error('#3: x = new String("1"); x -= null; x === 1. Actual: ' + (x));
}


x = null;
x -= new String("1");
if (x !== -1) {
  throw new Test262Error('#4: x = null; x -= new String("1"); x === -1. Actual: ' + (x));
}
