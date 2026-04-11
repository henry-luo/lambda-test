

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T9
description: >
    Call indexOf(searchString, position) function with function(){}()
    argument of string object
---*/

var __obj = {
  valueOf: function() {},
  toString: void 0
};


if (new String(__obj).indexOf(function() {}()) !== 0) {
  throw new Test262Error('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).indexOf(function(){}()) === 0. Actual: ' + new String(__obj).indexOf(function() {}()));
}

