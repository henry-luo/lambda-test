

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.7.2_A2.4_T4
description: Checking with undeclarated variables
flags: [noStrict]
---*/


if ((y = 1) >> y !== 0) {
  throw new Test262Error('#1: (y = 1) >> y === 0. Actual: ' + ((y = 1) >> y));
}
