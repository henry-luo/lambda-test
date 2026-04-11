

/*---
info: Single line comment can contain HORIZONTAL TAB (U+0009)
es5id: 7.2_A3.1_T2
description: Use real HORIZONTAL TAB
---*/


var x = 0;

if (x !== 0) {
  throw new Test262Error('#1: var x = 0; //	single	line	comment	x = 1; x === 0. Actual: ' + (x));
}
