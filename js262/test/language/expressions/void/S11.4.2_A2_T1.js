

/*---
info: Operator "void" uses GetValue
es5id: 11.4.2_A2_T1
description: Either Type(x) is not Reference or GetBase(x) is not null
---*/


if (void 0 !== undefined) {
  throw new Test262Error('#1: void 0 === undefined. Actual: ' + (void 0));
}


var x = 0;
if (void x !== undefined) {
  throw new Test262Error('#2: var x = 0; void x === undefined. Actual: ' + (void x));
}


var x = new Object();
if (void x !== undefined) {
  throw new Test262Error('#3: var x = new Object(); void x === undefined. Actual: ' + (void x));
}
