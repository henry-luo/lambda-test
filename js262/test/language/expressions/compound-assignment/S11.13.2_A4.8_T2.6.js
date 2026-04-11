

/*---
info: The production x >>>= y is the same as x = x >>> y
es5id: 11.13.2_A4.8_T2.6
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Undefined
---*/

var x;


x = "1";
x >>>= undefined;
if (x !== 1) {
  throw new Test262Error('#1: x = "1"; x >>>= undefined; x === 1. Actual: ' + (x));
}


x = undefined;
x >>>= "1";
if (x !== 0) {
  throw new Test262Error('#2: x = undefined; x >>>= "1"; x === 0. Actual: ' + (x));
}


x = new String("1");
x >>>= undefined;
if (x !== 1) {
  throw new Test262Error('#3: x = new String("1"); x >>>= undefined; x === 1. Actual: ' + (x));
}


x = undefined;
x >>>= new String("1");
if (x !== 0) {
  throw new Test262Error('#4: x = undefined; x >>>= new String("1"); x === 0. Actual: ' + (x));
}
