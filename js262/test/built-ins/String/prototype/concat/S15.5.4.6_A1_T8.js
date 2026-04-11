

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T8
description: >
    Call concat([,[...]]) function with void 0 argument of string
    object
---*/


if (String(42).concat(void 0) !== "42undefined") {
  throw new Test262Error('#1: String(42).concat(void 0) === "42undefined". Actual: ' + String(42).concat(void 0));
}

