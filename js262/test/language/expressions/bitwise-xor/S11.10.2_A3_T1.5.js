

/*---
info: Operator x ^ y returns ToNumber(x) ^ ToNumber(y)
es5id: 11.10.2_A3_T1.5
description: Type(x) and Type(y) are Object object and Function object
---*/


if (({} ^ function(){return 1}) !== 0) {
  throw new Test262Error('#1: ({} ^ function(){return 1}) === 0. Actual: ' + (({} ^ function(){return 1})));
}


if ((function(){return 1} ^ {}) !== 0) {
  throw new Test262Error('#2: (function(){return 1} ^ {}) === 0. Actual: ' + ((function(){return 1} ^ {})));
}


if ((function(){return 1} ^ function(){return 1}) !== 0) {
  throw new Test262Error('#3: (function(){return 1} ^ function(){return 1}) === 0. Actual: ' + ((function(){return 1} ^ function(){return 1})));
}


if (({} ^ {}) !== 0) {
  throw new Test262Error('#4: ({} ^ {}) === 0. Actual: ' + (({} ^ {})));
}
