

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T10
description: >
    Call toLocaleUpperCase() function of object with overrode toString
    function
---*/

var __obj = {
  toString: function() {
    return "\u0041b";
  }
}
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (__obj.toLocaleUpperCase() !== "AB") {
  throw new Test262Error('#1: var __obj = {toString:function(){return "\u0041b";}}; __obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __obj.toLocaleUpperCase() ==="AB". Actual: ' + __obj.toLocaleUpperCase());
}

