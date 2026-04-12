

/*---
info: If ToBoolean(x) is false, return x
es5id: 11.11.1_A3_T4
description: Type(x) or Type(y) is changed between null and undefined
---*/


if ((undefined && true) !== undefined) {
  throw new Test262Error('#1: (undefined && true) === undefined');
}


if ((null && false) !== null) {
  throw new Test262Error('#2: (null && false) === null');
}
