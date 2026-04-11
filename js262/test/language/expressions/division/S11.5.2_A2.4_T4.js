

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.5.2_A2.4_T4
description: Checking with undeclarated variables
flags: [noStrict]
---*/


if ((y = 1) / y !== 1) {
  throw new Test262Error('#1: (y = 1) / y === 1. Actual: ' + ((y = 1) / y));
}
