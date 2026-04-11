

/*---
info: Operator ~x returns ~ToInt32(x)
es5id: 11.4.8_A3_T5
description: Type(x) is Object object or Function object
---*/


if (~({}) !== -1) {
  throw new Test262Error('#1: ~({}) === -1. Actual: ' + (~({})));
}


if (~(function(){return 1}) !== -1) {
  throw new Test262Error('#2: ~(function(){return 1}) === -1. Actual: ' + (~(function(){return 1})));
}
