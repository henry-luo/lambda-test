

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T5
description: Call toLocaleLowerCase() function for function call
---*/


if (function() {
    return "GnulLuNa"
  }().toLocaleLowerCase() !== "gnulluna") {
  throw new Test262Error('#1: function(){return "GnulLuNa"}().toLocaleLowerCase() === "gnulluna". Actual: ' + function() {
    return "GnulLuNa"
  }().toLocaleLowerCase());
}

