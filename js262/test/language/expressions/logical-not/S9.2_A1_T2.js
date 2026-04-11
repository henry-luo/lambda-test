

/*---
info: Result of boolean conversion from undefined value is false
es5id: 9.2_A1_T2
description: >
    Undefined, void and others are converted to Boolean by implicit
    transformation
---*/


if (!(undefined) !== true) {
  throw new Test262Error('#1: !(undefined) === true. Actual: ' + (!(undefined)));
}


if (!(void 0) !== true) {
  throw new Test262Error('#2: !(undefined) === true. Actual: ' + (!(undefined)));
}


if (!(eval("var x")) !== true) {
  throw new Test262Error('#3: !(eval("var x")) === true. Actual: ' + (!(eval("var x"))));
}
