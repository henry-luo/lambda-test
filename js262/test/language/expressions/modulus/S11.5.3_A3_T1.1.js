

/*---
info: Operator x % y returns ToNumber(x) % ToNumber(y)
es5id: 11.5.3_A3_T1.1
description: >
    Type(x) and Type(y) vary between primitive boolean and Boolean
    object
---*/


if (true % true !== 0) {
  throw new Test262Error('#1: true % true === 0. Actual: ' + (true % true));
}


if (new Boolean(true) % true !== 0) {
  throw new Test262Error('#2: new Boolean(true) % true === 0. Actual: ' + (new Boolean(true) % true));
}


if (true % new Boolean(true) !== 0) {
  throw new Test262Error('#3: true % new Boolean(true) === 0. Actual: ' + (true % new Boolean(true)));
}


if (new Boolean(true) % new Boolean(true) !== 0) {
  throw new Test262Error('#4: new Boolean(true) % new Boolean(true) === 0. Actual: ' + (new Boolean(true) % new Boolean(true)));
}
