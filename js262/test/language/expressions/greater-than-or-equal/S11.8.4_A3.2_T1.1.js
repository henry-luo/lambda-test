

/*---
info: |
    Operator x >= y returns ToString(x) >= ToString(y), if Type(Primitive(x))
    is String and Type(Primitive(y)) is String
es5id: 11.8.4_A3.2_T1.1
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between primitive
    string and String object
---*/


if ("1" >= "1" !== true) {
  throw new Test262Error('#1: "1" >= "1" === true');
}


if (new String("1") >= "1" !== true) {
  throw new Test262Error('#2: new String("1") >= "1" === true');
}


if ("1" >= new String("1") !== true) {
  throw new Test262Error('#3: "1" >= new String("1") === true');
}


if (new String("1") >= new String("1") !== true) {
  throw new Test262Error('#4: new String("1") >= new String("1") === true');
}


if ("x" >= "1" !== true) {
  throw new Test262Error('#5: "x" >= "1" === true');
}


if ("1" >= "x" !== false) {
  throw new Test262Error('#6: "1" >= "x" === false');
}
