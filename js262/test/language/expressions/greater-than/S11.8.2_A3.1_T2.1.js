

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x > y returns ToNumber(x) > ToNumber(y)
es5id: 11.8.2_A3.1_T2.1
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Number (primitive or object) and Boolean
    (primitive and object)
---*/


if (true > 1 !== false) {
  throw new Test262Error('#1: true > 1 === false');
}


if (1 > true !== false) {
  throw new Test262Error('#2: 1 > true === false');
}


if (new Boolean(true) > 1 !== false) {
  throw new Test262Error('#3: new Boolean(true) > 1 === false');
}


if (1 > new Boolean(true) !== false) {
  throw new Test262Error('#4: 1 > new Boolean(true) === false');
}


if (true > new Number(1) !== false) {
  throw new Test262Error('#5: true > new Number(1) === false');
}


if (new Number(1) > true !== false) {
  throw new Test262Error('#6: new Number(1) > true === false');
}


if (new Boolean(true) > new Number(1) !== false) {
  throw new Test262Error('#7: new Boolean(true) > new Number(1) === false');
}


if (new Number(1) > new Boolean(true) !== false) {
  throw new Test262Error('#8: new Number(1) > new Boolean(true) === false');
}
