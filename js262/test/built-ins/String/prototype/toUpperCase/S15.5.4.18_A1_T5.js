

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T5
description: Call toUpperCase() function of function call
---*/


if (function() {
    return "GnulLuNa"
  }().toUpperCase() !== "GNULLUNA") {
  throw new Test262Error('#1: function(){return "GnulLuNa"}().toUpperCase() === "GNULLUNA". Actual: ' + function() {
    return "GnulLuNa"
  }().toUpperCase());
}

