

/*---
info: String.fromCharCode ( [ char0 [ , char1 [ , ... ] ] ] )
es5id: 15.5.3.2_A3_T1
description: Call String.fromCharCode(65,66,66,65)
---*/


if (String.fromCharCode(65, 66, 66, 65) !== "ABBA") {
  throw new Test262Error('#1: String.fromCharCode(65,66,66,65) === "ABBA". Actual: String.fromCharCode(65,66,66,65) ===' + String.fromCharCode(65, 66, 66, 65));
}

