

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.11.1_A2.4_T1
description: Checking with "="
---*/


var x = false; 
if (((x = true) && x) !== true) {
  throw new Test262Error('#1: var x = false; ((x = true) && x) === true');
}


var x = false; 
if ((x && (x = true)) !== false) {
  throw new Test262Error('#2: var x = false; (x && (x = true)) === false');
}
