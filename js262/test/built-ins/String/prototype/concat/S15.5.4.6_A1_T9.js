

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T9
description: >
    Call concat([,[...]]) function with function(){}() argument of
    string object
---*/


if (new String(42).concat(function() {}()) !== "42undefined") {
  throw new Test262Error('#1: new String(42).concat(function(){}()) === "42undefined". Actual: ' + new String(42).concat(function() {}()));
}

