

/*---
info: String type has a length property
es5id: 8.4_A3
description: Try read length property of string variable
---*/

var __str = "ABCDEFGH";


if (__str.length !== 8) {
  throw new Test262Error('#1: var __str = "ABCDEFGH"; __str.length === 8. Actual: ' + (__str.length));
}

