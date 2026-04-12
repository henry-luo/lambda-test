

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T9
description: >
    Arguments are undefined and object, and instance is
    String(object), object have overrided valueOf and toString
    functions
---*/

var __obj = {
  valueOf: function() {},
  toString: void 0
};


if (new String(__obj).slice(  undefined, __obj) !== "") {
  throw new Test262Error('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).slice(//*(function(){})()*//undefined,__obj) === "". Actual: ' + new String(__obj).slice(  undefined, __obj));
}

