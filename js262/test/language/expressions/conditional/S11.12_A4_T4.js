

/*---
info: If ToBoolean(x) is true, return y
es5id: 11.12_A4_T4
description: Type(x) or Type(y) is changed between null and undefined
---*/


if ((true ? undefined : true) !== undefined) {
  throw new Test262Error('#1: (true ? undefined : true) === undefined');
}


if ((true ? null : true) !== null) {
  throw new Test262Error('#2: (true ? null : true) === null');
}
