

/*---
info: "Operator x ? y : z uses GetValue"
es5id: 11.12_A2.1_T5
description: If ToBoolean(x) is true and GetBase(z) is null, return y
---*/


var y = new Object();
if ((true ? y : z) !== y) {
  throw new Test262Error('#1: var y = new Object(); (true ? y : z) === y');
}
