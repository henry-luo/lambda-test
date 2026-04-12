

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.10.3_A2.4_T3
description: Checking with undeclarated variables
flags: [noStrict]
---*/


try {
  x | (x = 1);
  throw new Test262Error('#1.1: x | (x = 1) throw ReferenceError. Actual: ' + (x | (x = 1)));
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x | (x = 1) throw ReferenceError. Actual: ' + (e));
  }
}


if (((y = 1) | y) !== 1) {
  throw new Test262Error('#2: ((y = 1) | y) === 1. Actual: ' + (((y = 1) | y)));
}
