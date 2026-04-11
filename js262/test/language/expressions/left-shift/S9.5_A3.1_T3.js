

/*---
info: Operator uses ToNumber
es5id: 9.5_A3.1_T3
description: Type(x) is String
---*/


if ((new String(1) << 0) !== 1) {
  throw new Test262Error('#1: (new String(1) << 0) === 1. Actual: ' + ((new String(1) << 0)));
}


if (("-1.234" << 0) !== -1) {
  throw new Test262Error('#2: ("-1.234" << 0) === -1. Actual: ' + (("-1.234" << 0)));
}
