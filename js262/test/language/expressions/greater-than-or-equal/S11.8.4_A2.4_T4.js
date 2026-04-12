

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.4_A2.4_T4
description: Checking with undeclarated variables
flags: [noStrict]
---*/


if ((y = 1) >= y !== true) {
  throw new Test262Error('#1: (y = 1) >= y === true');
}
