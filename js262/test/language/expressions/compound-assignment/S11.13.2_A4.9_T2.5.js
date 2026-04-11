

/*---
info: The production x &= y is the same as x = x & y
es5id: 11.13.2_A4.9_T2.5
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Boolean (primitive and object)
---*/

var x;


x = true;
x &= "1";
if (x !== 1) {
  throw new Test262Error('#1: x = true; x &= "1"; x === 1. Actual: ' + (x));
}


x = "1";
x &= true;
if (x !== 1) {
  throw new Test262Error('#2: x = "1"; x &= true; x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x &= "1";
if (x !== 1) {
  throw new Test262Error('#3: x = new Boolean(true); x &= "1"; x === 1. Actual: ' + (x));
}


x = "1";
x &= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#4: x = "1"; x &= new Boolean(true); x === 1. Actual: ' + (x));
}


x = true;
x &= new String("1");
if (x !== 1) {
  throw new Test262Error('#5: x = true; x &= new String("1"); x === 1. Actual: ' + (x));
}


x = new String("1");
x &= true;
if (x !== 1) {
  throw new Test262Error('#6: x = new String("1"); x &= true; x === 1. Actual: ' + (x));
}


x = new Boolean(true);
x &= new String("1");
if (x !== 1) {
  throw new Test262Error('#7: x = new Boolean(true); x &= new String("1"); x === 1. Actual: ' + (x));
}


x = new String("1");
x &= new Boolean(true);
if (x !== 1) {
  throw new Test262Error('#8: x = new String("1"); x &= new Boolean(true); x === 1. Actual: ' + (x));
}
