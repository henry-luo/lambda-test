

/*---
info: Operator x || y uses GetValue
es5id: 11.11.2_A2.1_T4
description: If ToBoolean(x) is true and GetBase(y) is null, return true
---*/


if ((true || x) !== true) {
  throw new Test262Error('#1: (true || x) === true');
}
