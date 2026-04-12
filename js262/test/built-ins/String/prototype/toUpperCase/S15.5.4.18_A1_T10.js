

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T10
description: >
    Call toUpperCase() function of object with overrode toString
    function
---*/

var __obj = {
  toString: function() {
    return "\u0041b";
  }
}
__obj.toUpperCase = String.prototype.toUpperCase;


if (__obj.toUpperCase() !== "AB") {
  throw new Test262Error('#1: var __obj = {toString:function(){return "\u0041b";}}; __obj.toUpperCase = String.prototype.toUpperCase; __obj.toUpperCase() ==="AB". Actual: ' + __obj.toUpperCase());
}

