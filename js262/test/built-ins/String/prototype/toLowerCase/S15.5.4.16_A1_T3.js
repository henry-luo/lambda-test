

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T3
description: Checking by using eval
---*/


if (eval("\"BJ\"").toLowerCase() !== "bj") {
  throw new Test262Error('#1: eval("\\"BJ\\"").toLowerCase() === "bj". Actual: ' + eval("\"BJ\"").toLowerCase());
}

