

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.11.2_A2.4_T3
description: Checking with undeclarated variables
flags: [noStrict]
---*/


try {
  x || (x = true);
  throw new Test262Error('#1.1: x || (x = true) throw ReferenceError. Actual: ' + (x || (x = true)));
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    throw new Test262Error('#1.2: x || (x = true) throw ReferenceError. Actual: ' + (e));
  }
}


if (((y = true) || y) !== true) {
  throw new Test262Error('#2: ((y = true) || y) === true');
}
