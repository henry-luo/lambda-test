

/*---
info: Operator "instanceof" uses GetValue
es5id: 11.8.6_A2.1_T1
description: Either Expression is not Reference or GetBase is not null
---*/


if (({}) instanceof Object !== true) {
  throw new Test262Error('#1: ({}) instanceof Object === true');
}


var object = {};
if (object instanceof Object !== true) {
  throw new Test262Error('#2: var object = {}; object instanceof Object === true');
}


var OBJECT = Object;
if (({}) instanceof OBJECT !== true) {
  throw new Test262Error('#3: var OBJECT = Object; ({}) instanceof OBJECT === true');
}


var object = {};
var OBJECT = Object;
if (object instanceof OBJECT !== true) {
  throw new Test262Error('#4: var object = {}; var OBJECT = Object; object instanceof OBJECT === true');
}
