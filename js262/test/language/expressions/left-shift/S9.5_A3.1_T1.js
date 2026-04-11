

/*---
info: Operator uses ToNumber
es5id: 9.5_A3.1_T1
description: Type(x) is Boolean
---*/


if ((new Boolean(true) << 0) !== 1) {
  throw new Test262Error('#1: (new Boolean(true) << 0) === 1. Actual: ' + ((new Boolean(true) << 0)));
}


if ((false << 0) !== 0) {
  throw new Test262Error('#2: (false << 0) === 0. Actual: ' + ((false << 0)));
}
