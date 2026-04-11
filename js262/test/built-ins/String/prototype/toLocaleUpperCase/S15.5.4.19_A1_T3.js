

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T3
description: Checking by using eval
---*/


if (eval("\"bj\"").toLocaleUpperCase() !== "BJ") {
  throw new Test262Error('#1: eval("\\"bj\\"").toLocaleUpperCase() === "BJ". Actual: ' + eval("\"bj\"").toLocaleUpperCase());
}

