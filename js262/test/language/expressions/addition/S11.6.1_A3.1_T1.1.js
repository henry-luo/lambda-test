

/*---
info: |
    If Type(Primitive(x)) is not String and Type(Primitive(y)) is not String,
    then operator x + y returns ToNumber(x) + ToNumber(y)
es5id: 11.6.1_A3.1_T1.1
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between primitive
    boolean and Boolean object
---*/


if (true + true !== 2) {
  throw new Test262Error('#1: true + true === 2. Actual: ' + (true + true));
}


if (new Boolean(true) + true !== 2) {
  throw new Test262Error('#2: new Boolean(true) + true === 2. Actual: ' + (new Boolean(true) + true));
}


if (true + new Boolean(true) !== 2) {
  throw new Test262Error('#3: true + new Boolean(true) === 2. Actual: ' + (true + new Boolean(true)));
}


if (new Boolean(true) + new Boolean(true) !== 2) {
  throw new Test262Error('#4: new Boolean(true) + new Boolean(true) === 2. Actual: ' + (new Boolean(true) + new Boolean(true)));
}
