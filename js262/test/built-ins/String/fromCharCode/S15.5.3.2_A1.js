

/*---
info: The length property of the fromCharCode function is 1
es5id: 15.5.3.2_A1
description: Checking String.fromCharCode.length
---*/


if (typeof String.fromCharCode !== "function") {
  throw new Test262Error('#1: typeof String.fromCharCode === "function". Actual: typeof String.fromCharCode ===' + typeof String.fromCharCode);
}


if (!(String.hasOwnProperty("fromCharCode"))) {
  throw new Test262Error('#2: String.hasOwnProperty("fromCharCode") return true. Actual: ' + String.hasOwnProperty("fromCharCode"));
}


if (String.fromCharCode.length !== 1) {
  throw new Test262Error('#3: String.fromCharCode.length === 1. Actual: String.fromCharCode.length ===' + String.fromCharCode.length);
}

