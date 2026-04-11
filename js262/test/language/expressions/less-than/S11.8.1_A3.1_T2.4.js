

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x < y returns ToNumber(x) < ToNumber(y)
es5id: 11.8.1_A3.1_T2.4
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Number (primitive or object) and Undefined
---*/


if (1 < undefined !== false) {
  throw new Test262Error('#1: 1 < undefined === false');
}


if (undefined < 1 !== false) {
  throw new Test262Error('#2: undefined < 1 === false');
}


if (new Number(1) < undefined !== false) {
  throw new Test262Error('#3: new Number(1) < undefined === false');
}


if (undefined < new Number(1) !== false) {
  throw new Test262Error('#4: undefined < new Number(1) === false');
}
