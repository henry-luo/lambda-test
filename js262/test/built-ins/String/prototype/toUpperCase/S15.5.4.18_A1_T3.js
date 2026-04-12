

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T3
description: Checking by using eval
---*/


if (eval("\"bj\"").toUpperCase() !== "BJ") {
  throw new Test262Error('#1: eval("\\"bj\\"").toUpperCase() === "BJ". Actual: ' + eval("\"bj\"").toUpperCase());
}

