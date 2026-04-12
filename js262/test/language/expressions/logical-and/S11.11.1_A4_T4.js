

/*---
info: If ToBoolean(x) is true, return y
es5id: 11.11.1_A4_T4
description: Type(x) or Type(y) is changed between null and undefined
---*/


if ((true && undefined) !== undefined) {
  throw new Test262Error('#1: (true && undefined) === undefined');
}


if ((true && null) !== null) {
  throw new Test262Error('#2: (true && null) === null');
}
