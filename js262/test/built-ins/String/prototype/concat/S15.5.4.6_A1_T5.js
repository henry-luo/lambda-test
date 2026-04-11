

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T5
description: >
    Call concat([,[...]]) function with null argument of function
    object
---*/


if (function() {
    return "lego"
  }().concat(null) !== "legonull") {
  throw new Test262Error('#1: function(){return "lego"}().concat(null) === "legonull". Actual: ' + function() {
    return "lego"
  }().concat(null));
}

