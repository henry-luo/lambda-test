

/*---
info: |
    Operator x <= y returns ToNumber(x) <= ToNumber(y), if Type(Primitive(x))
    is not String or Type(Primitive(y)) is not String
es5id: 11.8.3_A3.1_T2.9
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Null
---*/


if (true <= null !== false) {
  throw new Test262Error('#1: true <= null === false');
}


if (null <= true !== true) {
  throw new Test262Error('#2: null <= true === true');
}


if (new Boolean(true) <= null !== false) {
  throw new Test262Error('#3: new Boolean(true) <= null === false');
}


if (null <= new Boolean(true) !== true) {
  throw new Test262Error('#4: null <= new Boolean(true) === true');
}
