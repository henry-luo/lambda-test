

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T13
description: >
    Override toString and valueOf functions, then call
    toLocaleUpperCase() function for this object
---*/

var __obj = {
  toString: function() {
    return {};
  },
  valueOf: function() {
    return 1;
  }
}
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (__obj.toLocaleUpperCase() !== "1") {
  throw new Test262Error('#1: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; __obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __obj.toLocaleUpperCase() ==="1". Actual: ' + __obj.toLocaleUpperCase());
}


if (__obj.toLocaleUpperCase().length !== 1) {
  throw new Test262Error('#2: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; __obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __obj.toLocaleUpperCase().length === 1. Actual: ' + __obj.toLocaleUpperCase().length);
}

