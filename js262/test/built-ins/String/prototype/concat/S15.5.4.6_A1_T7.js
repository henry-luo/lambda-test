

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T7
description: >
    Call concat([,[...]]) function with undefined argument of string
    object
---*/


if (String("lego").concat(undefined) !== "legoundefined") {
  throw new Test262Error('#1: String("lego").concat(undefined) === "legoundefined". Actual: ' + String("lego").concat(undefined));
}

