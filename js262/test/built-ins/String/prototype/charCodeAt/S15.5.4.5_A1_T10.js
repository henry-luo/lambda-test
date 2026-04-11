

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T10
description: Call charCodeAt() function with object argument
---*/

var __obj = {
  toString: function() {
    return 1;
  }
}
var __str = "lego";


if (__str.charCodeAt(__obj) !== 0x65) {
  throw new Test262Error('#1: var __obj = {toString:function(){return 1;}}; var __str = "lego"; __str.charCodeAt(__obj) === 0x65. Actual: ' + __str.charCodeAt(__obj));
}

