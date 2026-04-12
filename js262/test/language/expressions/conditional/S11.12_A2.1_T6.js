

/*---
info: "Operator x ? y : z uses GetValue"
es5id: 11.12_A2.1_T6
description: If ToBoolean(x) is false and GetBase(y) is null, return z
---*/


var z = new Object();
if ((false ? y : z) !== z) {
  throw new Test262Error('#1: var z = new Object(); (false ? y : z) === z');
}
