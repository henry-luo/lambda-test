

/*---
info: Empty string variable has a length property
es5id: 8.4_A4
description: Try read length property of empty string variable
---*/

var __str = "";


if (__str.length !== 0) {
  throw new Test262Error('#1: var __str = ""; __str.length === 0. Actual: ' + (__str));
}

