

/*---
info: Result of boolean conversion from null value is false
es5id: 9.2_A2_T2
description: null convert to Boolean by implicit transformation
---*/


if (!(null) !== true) {
  throw new Test262Error('#1: !(null) === true. Actual: ' + (!(null))); 
}
