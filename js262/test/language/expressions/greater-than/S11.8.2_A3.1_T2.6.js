

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x > y returns ToNumber(x) > ToNumber(y)
es5id: 11.8.2_A3.1_T2.6
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between String (primitive or object) and Undefined
---*/


if ("1" > undefined !== false) {
  throw new Test262Error('#1: "1" > undefined === false');
}


if (undefined > "1" !== false) {
  throw new Test262Error('#2: undefined > "1" === false');
}


if (new String("1") > undefined !== false) {
  throw new Test262Error('#3: new String("1") > undefined === false');
}


if (undefined > new String("1") !== false) {
  throw new Test262Error('#4: undefined > new String("1") === false');
}
