

/*---
info: If x is +0(-0) and y is -0(+0), return false
es5id: 11.9.5_A4.2
description: Checking all combinations
---*/


if (+0 !== -0) {
  throw new Test262Error('#1: +0 === -0');
}


if (-0 !== +0) {
  throw new Test262Error('#2: -0 === +0');
}
