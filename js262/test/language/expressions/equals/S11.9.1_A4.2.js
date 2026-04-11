

/*---
info: If x is +0(-0) and y is -0(+0), return true
es5id: 11.9.1_A4.2
description: Checking all combinations
---*/


if ((+0 == -0) !== true) {
  throw new Test262Error('#1: (+0 == -0) === true');
}


if ((-0 == +0) !== true) {
  throw new Test262Error('#2: (-0 == +0) === true');
}
