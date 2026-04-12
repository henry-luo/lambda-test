

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x > y returns ToNumber(x) > ToNumber(y)
es5id: 11.8.2_A3.1_T2.8
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Undefined
---*/


if (true > undefined !== false) {
  throw new Test262Error('#1: true > undefined === false');
}


if (undefined > true !== false) {
  throw new Test262Error('#2: undefined > true === false');
}


if (new Boolean(true) > undefined !== false) {
  throw new Test262Error('#3: new Boolean(true) > undefined === false');
}


if (undefined > new Boolean(true) !== false) {
  throw new Test262Error('#4: undefined > new Boolean(true) === false');
}
