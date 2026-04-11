

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.11.2_A2.4_T1
description: Checking with "="
---*/


var x = true; 
if (((x = false) || x) !== false) {
  throw new Test262Error('#1: var x = true; ((x = false) || x) === false');
}


var x = true; 
if ((x || (x = false)) !== true) {
  throw new Test262Error('#2: var x = true; (x || (x = false)) === true');
}
