

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x > y returns ToNumber(x) > ToNumber(y)
es5id: 11.8.2_A3.1_T1.3
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between Null and
    Undefined
---*/


if (null > undefined !== false) {
  throw new Test262Error('#1: null > undefined === false');
}


if (undefined > null !== false) {
  throw new Test262Error('#2: undefined > null === false');
}


if (undefined > undefined !== false) {
  throw new Test262Error('#3: undefined > undefined === false');
}


if (null > null !== false) {
  throw new Test262Error('#4: null > null === false');
}
