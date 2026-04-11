

/*---
info: |
    If Type(Primitive(x)) is String or Type(Primitive(y)) is String, then
    operator x + y returns the result of concatenating ToString(x) followed
    by ToString(y)
es5id: 11.6.1_A3.2_T1.1
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between primitive
    string and String object
---*/


if ("1" + "1" !== "11") {
  throw new Test262Error('#1: "1" + "1" === "11". Actual: ' + ("1" + "1"));
}


if (new String("1") + "1" !== "11") {
  throw new Test262Error('#2: new String("1") + "1" === "11". Actual: ' + (new String("1") + "1"));
}


if ("1" + new String("1") !== "11") {
  throw new Test262Error('#3: "1" + new String("1") === "11". Actual: ' + ("1" + new String("1")));
}


if (new String("1") + new String("1") !== "11") {
  throw new Test262Error('#4: new String("1") + new String("1") === "11". Actual: ' + (new String("1") + new String("1")));
}


if ("x" + "1" !=="x1") {
  throw new Test262Error('#5: "x" + "1" === "x1". Actual: ' + ("x" + "1"));
}


if ("1" + "x" !== "1x") {
  throw new Test262Error('#6: "1" + "x" === "1x". Actual: ' + ("1" + "x"));
}
