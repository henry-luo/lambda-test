

/*---
info: |
    If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String,
    then operator x < y returns ToNumber(x) < ToNumber(y)
es5id: 11.8.1_A3.1_T1.2
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between primitive
    number and Number object
---*/


if (1 < 1 !== false) {
  throw new Test262Error('#1: 1 < 1 === false');
}


if (new Number(1) < 1 !== false) {
  throw new Test262Error('#2: new Number(1) < 1 === false');
}


if (1 < new Number(1) !== false) {
  throw new Test262Error('#3: 1 < new Number(1) === false');
}


if (new Number(1) < new Number(1) !== false) {
  throw new Test262Error('#4: new Number(1) < new Number(1) === false');
}
