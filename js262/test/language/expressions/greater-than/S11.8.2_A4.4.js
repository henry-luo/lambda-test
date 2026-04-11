

/*---
info: If either variable x or y is +0 and the other is -0, return false
es5id: 11.8.2_A4.4
description: Checking all combinations
---*/


if ((0 > 0) !== false) {
  throw new Test262Error('#1: (0 > 0) === false');
}


if ((-0 > -0) !== false) {
  throw new Test262Error('#2: (-0 > -0) === false');
}


if ((+0 > -0) !== false) {
  throw new Test262Error('#3: (+0 > -0) === false');
}


if ((-0 > +0) !== false) {
  throw new Test262Error('#4: (-0 > +0) === false');
}
