

/*---
info: If ToBoolean(x) is false, return z
es5id: 11.12_A3_T4
description: Type(x) or Type(y) is changed between null and undefined
---*/


if ((false ? true : undefined) !== undefined) {
  throw new Test262Error('#1: (false ? true : undefined) === undefined');
}


if ((false ? true : null) !== null) {
  throw new Test262Error('#2: (false ? true : null) === null');
}
