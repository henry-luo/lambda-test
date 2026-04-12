

/*---
info: Operator x >> y returns ToNumber(x) >> ToNumber(y)
es5id: 11.7.2_A3_T2.8
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Undefined
---*/


if (true >> undefined !== 1) {
  throw new Test262Error('#1: true >> undefined === 1. Actual: ' + (true >> undefined));
}


if (undefined >> true !== 0) {
  throw new Test262Error('#2: undefined >> true === 0. Actual: ' + (undefined >> true));
}


if (new Boolean(true) >> undefined !== 1) {
  throw new Test262Error('#3: new Boolean(true) >> undefined === 1. Actual: ' + (new Boolean(true) >> undefined));
}


if (undefined >> new Boolean(true) !== 0) {
  throw new Test262Error('#4: undefined >> new Boolean(true) === 0. Actual: ' + (undefined >> new Boolean(true)));
}
