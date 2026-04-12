

/*---
info: |
    If Type(Primitive(x)) is String or Type(Primitive(y)) is String, then
    operator x + y returns the result of concatenating ToString(x) followed
    by ToString(y)
es5id: 11.6.1_A3.2_T2.3
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between String (primitive or object) and Undefined
---*/


if ("1" + undefined !== "1undefined") {
  throw new Test262Error('#1: "1" + undefined === "1undefined". Actual: ' + ("1" + undefined));
}


if (undefined + "1" !== "undefined1") {
  throw new Test262Error('#2: undefined + "1" === "undefined1". Actual: ' + (undefined + "1"));
}


if (new String("1") + undefined !== "1undefined") {
  throw new Test262Error('#3: new String("1") + undefined === "1undefined". Actual: ' + (new String("1") + undefined));
}


if (undefined + new String("1") !== "undefined1") {
  throw new Test262Error('#4: undefined + new String("1") === "undefined1". Actual: ' + (undefined + new String("1")));
}
