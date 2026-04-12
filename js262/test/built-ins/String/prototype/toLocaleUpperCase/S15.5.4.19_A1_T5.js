

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T5
description: Call toLocaleUpperCase() function of function call
---*/


if (function() {
    return "GnulLuNa"
  }().toLocaleUpperCase() !== "GNULLUNA") {
  throw new Test262Error('#1: function(){return "GnulLuNa"}().toLocaleUpperCase() === "GNULLUNA". Actual: ' + function() {
    return "GnulLuNa"
  }().toLocaleUpperCase());
}

