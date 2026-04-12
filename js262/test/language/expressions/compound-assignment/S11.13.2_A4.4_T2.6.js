

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.6
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and String (primitive and object)
---*/

var x;


x = "1";
x += 1;
if (x !== "11") {
  throw new Test262Error('#1: x = "1"; x += 1; x === "11". Actual: ' + (x));
}


x = 1;
x += "1";
if (x !== "11") {
  throw new Test262Error('#2: x = 1; x += "1"; x === "11". Actual: ' + (x));
}


x = new String("1");
x += 1;
if (x !== "11") {
  throw new Test262Error('#3: x = new String("1"); x += 1; x === "11". Actual: ' + (x));
}


x = 1;
x += new String("1");
if (x !== "11") {
  throw new Test262Error('#4: x = 1; x += new String("1"); x === "11". Actual: ' + (x));
}


x = "1";
x += new Number(1);
if (x !== "11") {
  throw new Test262Error('#5: x = "1"; x += new Number(1); x === "11". Actual: ' + (x));
}


x = new Number(1);
x += "1";
if (x !== "11") {
  throw new Test262Error('#6: x = new Number(1); x += "1"; x === "11". Actual: ' + (x));
}


x = new String("1");
x += new Number(1);
if (x !== "11") {
  throw new Test262Error('#7: x = new String("1"); x += new Number(1); x === "11". Actual: ' + (x));
}


x = new Number(1);
x += new String("1");
if (x !== "11") {
  throw new Test262Error('#8: x = new Number(1); x += new String("1"); x === "11". Actual: ' + (x));
}


if ("x" + 1 !=="x1") {
  throw new Test262Error('#9: x = "x"; x += 1; x === "x1". Actual: ' + (x));
}


x = 1;
x += "x";
if (x !== "1x") {
  throw new Test262Error('#10: x = 1; x += "x"; x === "1x". Actual: ' + (x));
}
