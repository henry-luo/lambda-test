

/*---
info: If x and y are +0 and -0, return false
es5id: 11.8.1_A4.4
description: Checking all combinations
---*/


if ((0 < 0) !== false) {
  throw new Test262Error('#1: (0 < 0) === false');
}


if ((-0 < -0) !== false) {
  throw new Test262Error('#2: (-0 < -0) === false');
}


if ((+0 < -0) !== false) {
  throw new Test262Error('#3: (+0 < -0) === false');
}


if ((-0 < +0) !== false) {
  throw new Test262Error('#4: (-0 < +0) === false');
}
