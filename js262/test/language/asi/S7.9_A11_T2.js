

/*---
info: Check If Statement for automatic semicolon insertion
es5id: 7.9_A11_T2
description: Use if (false) \n x = 1 and check x
---*/


var x = 0;
if (false)
x = 1
if (x !== 0) {
  throw new Test262Error('#1: Check If Statement for automatic semicolon insertion');
}
