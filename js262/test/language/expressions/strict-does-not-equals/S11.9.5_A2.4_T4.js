

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.9.5_A2.4_T4
description: Checking undeclarated variables
flags: [noStrict]
---*/


if ((y = 1) !== y) {
  throw new Test262Error('#1: (y = 1) === y');
}
