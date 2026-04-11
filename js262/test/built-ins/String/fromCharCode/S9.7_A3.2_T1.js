

/*---
info: Operator uses floor, abs
es5id: 9.7_A3.2_T1
description: >
    For testing use String.fromCharCode(Number).charCodeAt(0)
    construction
---*/


if (String.fromCharCode(1.2345).charCodeAt(0) !== 1) {
  throw new Test262Error('#1: String.fromCharCode(1.2345).charCodeAt(0) === 1. Actual: ' + (String.fromCharCode(1.2345).charCodeAt(0)));
}


if (String.fromCharCode(-5.4321).charCodeAt(0) !== 65531) {
  throw new Test262Error('#2: String.fromCharCode(-5.4321).charCodeAt(0) === 65531. Actual: ' + (String.fromCharCode(-5.4321).charCodeAt(0)));
}
