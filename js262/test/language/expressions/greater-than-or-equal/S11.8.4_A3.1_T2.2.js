

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x >= y returns ToNumber(x) >= ToNumber(y)
es5id: 11.8.4_A3.1_T2.2
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Number (primitive or object) and String
    (primitive and object)
---*/


if ("1" >= 1 !== true) {
  throw new Test262Error('#1: "1" >= 1 === true');
}


if (1 >= "1" !== true) {
  throw new Test262Error('#2: 1 >= "1" === true');
}


if (new String("1") >= 1 !== true) {
  throw new Test262Error('#3: new String("1") >= 1 === true');
}


if (1 >= new String("1") !== true) {
  throw new Test262Error('#4: 1 >= new String("1") === true');
}


if ("1" >= new Number(1) !== true) {
  throw new Test262Error('#5: "1" >= new Number(1) === true');
}


if (new Number(1) >= "1" !== true) {
  throw new Test262Error('#6: new Number(1) >= "1" === true');
}


if (new String("1") >= new Number(1) !== true) {
  throw new Test262Error('#7: new String("1") >= new Number(1) === true');
}


if (new Number(1) >= new String("1") !== true) {
  throw new Test262Error('#8: new Number(1) >= new String("1") === true');
}


if ("x" >= 1 !== false) {
  throw new Test262Error('#9: "x" >= 1 === false');
}


if (1 >= "x" !== false) {
  throw new Test262Error('#10: 1 >= "x" === false');
}
