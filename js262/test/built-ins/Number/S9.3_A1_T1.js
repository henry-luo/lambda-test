

/*---
info: Result of number conversion from undefined value is NaN
es5id: 9.3_A1_T1
description: Undefined convert to Number by explicit transformation
---*/

assert.sameValue(Number(undefined), NaN);
