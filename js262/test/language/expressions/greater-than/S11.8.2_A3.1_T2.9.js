

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x > y returns ToNumber(x) > ToNumber(y)
es5id: 11.8.2_A3.1_T2.9
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Null
---*/


if (true > null !== true) {
  throw new Test262Error('#1: true > null === true');
}


if (null > true !== false) {
  throw new Test262Error('#2: null > true === false');
}


if (new Boolean(true) > null !== true) {
  throw new Test262Error('#3: new Boolean(true) > null === true');
}


if (null > new Boolean(true) !== false) {
  throw new Test262Error('#4: null > new Boolean(true) === false');
}
