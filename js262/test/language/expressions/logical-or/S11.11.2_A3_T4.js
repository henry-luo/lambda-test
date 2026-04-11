

/*---
info: If ToBoolean(x) is false, return y
es5id: 11.11.2_A3_T4
description: Type(x) or Type(y) is changed between null and undefined
---*/


if ((false || undefined) !== undefined) {
  throw new Test262Error('#1: (false || undefined) === undefined');
}


if ((false || null) !== null) {
  throw new Test262Error('#2: (false || null) === null');
}
