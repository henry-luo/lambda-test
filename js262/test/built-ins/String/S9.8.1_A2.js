

/*---
info: If m is +0 or -0, return the string "0"
es5id: 9.8.1_A2
description: +0 and -0 convert to String by explicit transformation
---*/


if (String(+0) !== "0") {
  throw new Test262Error('#1: String(+0) === "0". Actual: ' + (String(+0)));
}


if (String(-0) !== "0") {
  throw new Test262Error('#2: String(-0) === "0". Actual: ' + (String(-0)));
}
