

/*---
info: When length of searchString less than length of ToString(this) -1 returns
es5id: 15.5.4.7_A2_T4
description: Call "abcd".indexOf("abcdab",NaN) and check result
---*/


if ("abcd".indexOf("abcdab", NaN) !== -1) {
  throw new Test262Error('#1: "abcd".indexOf("abcdab",NaN)===-1. Actual: ' + ("abcd".indexOf("abcdab", NaN)));
}

