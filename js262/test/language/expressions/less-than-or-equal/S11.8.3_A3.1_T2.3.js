

/*---
info: |
    Operator x <= y returns ToNumber(x) <= ToNumber(y), if Type(Primitive(x))
    is not String or Type(Primitive(y)) is not String
es5id: 11.8.3_A3.1_T2.3
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Number (primitive or object) and Null
---*/


if (1 <= null !== false) {
  throw new Test262Error('#1: 1 <= null === false');
}


if (null <= 1 !== true) {
  throw new Test262Error('#2: null <= 1 === true');
}


if (new Number(1) <= null !== false) {
  throw new Test262Error('#3: new Number(1) <= null === false');
}


if (null <= new Number(1) !== true) {
  throw new Test262Error('#4: null <= new Number(1) === true');
}
