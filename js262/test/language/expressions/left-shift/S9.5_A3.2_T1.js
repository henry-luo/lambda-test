

/*---
info: Operator uses floor, abs
es5id: 9.5_A3.2_T1
description: Use operator <<0
---*/


if ((1.2345 << 0) !== 1) {
  throw new Test262Error('#1: (1.2345 << 0) === 1. Actual: ' + ((1.2345 << 0)));
}


if ((-5.4321 << 0) !== -5) {
  throw new Test262Error('#2: (-5.4321 << 0) === -5. Actual: ' + ((-5.4321 << 0)));
}
