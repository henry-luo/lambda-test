

/*---
info: Operator uses floor, abs
es5id: 9.5_A3.2_T2
description: Use operator ~
---*/


if (~1.2345 !== ~1) {
  throw new Test262Error('#1: ~1.2345 === ~1)');
}


if (~-5.4321 !== ~-5) {
  throw new Test262Error('#2: ~-5.4321 === ~-5)');
}
