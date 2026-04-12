

/*---
info: |
    If Type(Primitive(x)) is not String and Type(Primitive(y)) is not String,
    then operator x + y returns ToNumber(x) + ToNumber(y)
es5id: 11.6.1_A3.1_T2.4
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between Boolean (primitive or object) and Undefined
---*/


if (isNaN(true + undefined) !== true) {
  throw new Test262Error('#1: true + undefined === Not-a-Number. Actual: ' + (true + undefined));
}


if (isNaN(undefined + true) !== true) {
  throw new Test262Error('#2: undefined + true === Not-a-Number. Actual: ' + (undefined + true));
}


if (isNaN(new Boolean(true) + undefined) !== true) {
  throw new Test262Error('#3: new Boolean(true) + undefined === Not-a-Number. Actual: ' + (new Boolean(true) + undefined));
}


if (isNaN(undefined + new Boolean(true)) !== true) {
  throw new Test262Error('#4: undefined + new Boolean(true) === Not-a-Number. Actual: ' + (undefined + new Boolean(true)));
}
