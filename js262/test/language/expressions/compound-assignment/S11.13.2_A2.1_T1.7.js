

/*---
info: Operator uses GetValue
es5id: 11.13.2_A2.1_T1.7
description: >
    Either Type is not Reference or GetBase is not null, check
    opeartor is "x >>= y"
---*/


var x = 4;
var z = (x >>= 1);
if (z !== 2) {
  throw new Test262Error('#1: var x = 4; var z = (x >>= 1); z === 2. Actual: ' + (z));
}


var x = 4;
var y = 1;
var z = (x >>= y);
if (z !== 2) {
  throw new Test262Error('#2: var x = 4; var y = 1; var z = (x >>= y); z === 2. Actual: ' + (z));
}
