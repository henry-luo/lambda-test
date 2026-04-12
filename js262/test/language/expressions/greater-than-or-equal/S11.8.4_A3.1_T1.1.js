

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x >= y returns ToNumber(x) >= ToNumber(y)
es5id: 11.8.4_A3.1_T1.1
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between primitive
    boolean and Boolean object
---*/


if (true >= true !== true) {
  throw new Test262Error('#1: true >= true === true');
}


if (new Boolean(true) >= true !== true) {
  throw new Test262Error('#2: new Boolean(true) >= true === true');
}


if (true >= new Boolean(true) !== true) {
  throw new Test262Error('#3: true >= new Boolean(true) === true');
}


if (new Boolean(true) >= new Boolean(true) !== true) {
  throw new Test262Error('#4: new Boolean(true) >= new Boolean(true) === true');
}
