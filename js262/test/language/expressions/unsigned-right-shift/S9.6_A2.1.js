

/*---
info: ToUint32 returns values between 0 and 2^32-1
es5id: 9.6_A2.1
description: >
    Converting numbers, which are in\outside of Uint32 scopes, with
    >>>0 operator
---*/


if ((0 >>> 0) !== 0) {
  throw new Test262Error('#1: (0 >>> 0) === 0. Actual: ' + ((0 >>> 0)));
}


if ((1 >>> 0) !== 1) {
  throw new Test262Error('#2: (1 >>> 0) === 1. Actual: ' + ((1 >>> 0)));
}


if ((-1 >>> 0) !== 4294967295) {
  throw new Test262Error('#3: (-1 >>> 0) === 4294967295. Actual: ' + ((-1 >>> 0)));
}


if ((4294967295 >>> 0) !== 4294967295) {
  throw new Test262Error('#4: (4294967295 >>> 0) === 4294967295. Actual: ' + ((4294967295 >>> 0)));
}


if ((4294967294 >>> 0) !== 4294967294) {
  throw new Test262Error('#5: (4294967294 >>> 0) === 4294967294. Actual: ' + ((4294967294 >>> 0)));
}


if ((4294967296 >>> 0) !== 0) {
  throw new Test262Error('#6: (4294967296 >>> 0) === 0. Actual: ' + ((4294967296 >>> 0)));
}
