

/*---
info: |
    Result of boolean conversion from number value is false if the argument
    is +0, -0, or NaN; otherwise, is true
es5id: 9.2_A4_T2
description: +0, -0 and NaN convert to Boolean by implicit transformation
---*/


if (!(+0) !== true) {
  throw new Test262Error('#1: !(+0) === true. Actual: ' + (!(+0))); 	 
}


if (!(-0) !== true) {
  throw new Test262Error('#2: !(-0) === true. Actual: ' + (!(-0)));
}


if (!(Number.NaN) !== true) {
  throw new Test262Error('#3: !(Number.NaN) === true. Actual: ' + (!(Number.NaN)));
}
