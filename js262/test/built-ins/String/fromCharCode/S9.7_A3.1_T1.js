

/*---
info: Operator uses ToNumber
es5id: 9.7_A3.1_T1
description: Type(x) is Boolean
---*/


if (String.fromCharCode(new Boolean(true)).charCodeAt(0) !== 1) {
  throw new Test262Error('#1: String.fromCharCode(new Boolean(true)).charCodeAt(0) === 1. Actual: ' + (String.fromCharCode(new Boolean(true)).charCodeAt(0)));
}


if (String.fromCharCode(false).charCodeAt(0) !== 0) {
  throw new Test262Error('#2: String.fromCharCode(false).charCodeAt(0) === 0. Actual: ' + (String.fromCharCode(false).charCodeAt(0)));
}
