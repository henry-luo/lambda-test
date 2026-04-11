

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.6_A2.4_T1
description: Checking with "="
---*/


var OBJECT = 0;
if ((OBJECT = Object, {}) instanceof OBJECT !== true) {
  throw new Test262Error('#1: var OBJECT = 0; (OBJECT = Object, {}) instanceof OBJECT === true');
}


var object = {}; 
if (object instanceof (object = 0, Object) !== true) {
  throw new Test262Error('#2: var object = {};  object instanceof (object = 0, Object) === true');
}
