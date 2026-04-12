

/*---
info: If ToBoolean(x) is true, return x
es5id: 11.11.2_A4_T4
description: Type(x) or Type(y) vary between Null and Undefined
---*/


if ((true || undefined) !== true) {
  throw new Test262Error('#1: (true || undefined) === true');
}


if ((true || null) !== true) {
  throw new Test262Error('#2: (true || null) === true');
}
