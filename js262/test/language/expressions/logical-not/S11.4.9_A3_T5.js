

/*---
info: Operator !x returns !ToBoolean(x)
es5id: 11.4.9_A3_T5
description: Type(x) is Object object or Function object
---*/


if ((!{}) !== false) {
  throw new Test262Error('#1: !({}) === false');
}


if (!(function(){return 1}) !== false) {
  throw new Test262Error('#2: !(function(){return 1}) === false');
}
