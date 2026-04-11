

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T4
description: Call concat([,[...]]) function without argument of string object
---*/


if ("lego".concat() !== "lego") {
  throw new Test262Error('#1: "lego".concat() === "lego". Actual: ' + ("lego".concat()));
}

