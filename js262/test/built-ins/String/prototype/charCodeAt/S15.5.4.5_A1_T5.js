

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T5
description: Call charCodeAt() function with null argument of function object
---*/


if (function() {
    return "lego"
  }().charCodeAt(null) !== 0x6C) {
  throw new Test262Error('#1: function(){return "lego"}().charCodeAt(null) === 0x6C. Actual: ' + function() {
    return "lego"
  }().charCodeAt(null));
}

