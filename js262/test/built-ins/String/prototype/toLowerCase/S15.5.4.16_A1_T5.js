

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T5
description: Call toLowerCase() function for function call
---*/


if (function() {
    return "GnulLuNa"
  }().toLowerCase() !== "gnulluna") {
  throw new Test262Error('#1: function(){return "GnulLuNa"}().toLowerCase() === "gnulluna". Actual: ' + function() {
    return "GnulLuNa"
  }().toLowerCase());
}

