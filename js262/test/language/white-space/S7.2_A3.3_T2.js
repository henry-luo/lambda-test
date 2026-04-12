

/*---
info: Single line comment can contain FORM FEED (U+000C)
es5id: 7.2_A3.3_T2
description: Use real FORM FEED
---*/


var x = 0;

if (x !== 0) {
  throw new Test262Error('#1: var x = 0; //singlelinecommentx = 1; x === 0. Actual: ' + (x));
}
