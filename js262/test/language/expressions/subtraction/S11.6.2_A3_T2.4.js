

/*---
info: Operator x - y returns ToNumber(x) - ToNumber(y)
es5id: 11.6.2_A3_T2.4
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Undefined
---*/


if (isNaN(1 - undefined) !== true) {
  throw new Test262Error('#1: 1 - undefined === Not-a-Number. Actual: ' + (1 - undefined));
}


if (isNaN(undefined - 1) !== true) {
  throw new Test262Error('#2: undefined - 1 === Not-a-Number. Actual: ' + (undefined - 1));
}


if (isNaN(new Number(1) - undefined) !== true) {
  throw new Test262Error('#3: new Number(1) - undefined === Not-a-Number. Actual: ' + (new Number(1) - undefined));
}


if (isNaN(undefined - new Number(1)) !== true) {
  throw new Test262Error('#4: undefined - new Number(1) === Not-a-Number. Actual: ' + (undefined - new Number(1)));
}
