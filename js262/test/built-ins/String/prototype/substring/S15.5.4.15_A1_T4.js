

/*---
info: String.prototype.substring (start, end)
es5id: 15.5.4.15_A1_T4
description: >
    Arguments are null and number, and instance is function call, that
    returned string
---*/


if (function() {
    return "gnulluna"
  }().substring(null, -3) !== "") {
  throw new Test262Error('#1: function(){return "gnulluna"}().substring(null, -3) === "". Actual: ' + function() {
    return "gnulluna"
  }().substring(null, -3));
}

