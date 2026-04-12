

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T4
description: >
    Arguments are null and number, and instance is function call, that
    returned string
---*/


if (function() {
    return "gnulluna"
  }().slice(null, -3) !== "gnull") {
  throw new Test262Error('#1: function(){return "gnulluna"}().slice(null, -3) === "gnull". Actual: ' + function() {
    return "gnulluna"
  }().slice(null, -3));
}

