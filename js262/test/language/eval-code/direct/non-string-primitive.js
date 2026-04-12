

/*---
info: If x is not a string value, return x
es5id: 15.1.2.1_A1.1_T1
description: Checking all primitive
---*/


var x = 1;
if (eval(x) !== x) {
  throw new Test262Error('#1: x = 1; eval(x) === x. Actual: ' + (eval(x)));
}


if (eval(1) !== 1) {
  throw new Test262Error('#2: eval(1) === 1. Actual: ' + (eval(1)));
}


if (eval(true) !== true) {
  throw new Test262Error('#3: eval(true) === true. Actual: ' + (eval(true)));
}


if (eval(null) !== null) {
  throw new Test262Error('#4: eval(null) === null. Actual: ' + (eval(null)));
}


if (eval(undefined) !== undefined) {
  throw new Test262Error('#5: eval(undefined) === undefined. Actual: ' + (eval(undefined)));
}
