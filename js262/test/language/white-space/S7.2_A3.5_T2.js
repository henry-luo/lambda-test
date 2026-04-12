

/*---
info: Single line comment can contain NO-BREAK SPACE (U+00A0)
es5id: 7.2_A3.5_T2
description: Use real NO-BREAK SPACE
---*/


var x = 0;

if (x !== 0) {
  throw new Test262Error('#1: var x = 0; // single line comment x = 1; x === 0. Actual: ' + (x));
}
