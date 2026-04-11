

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T8
description: >
    Call indexOf(searchString, position) function with void 0 argument
    of string object
---*/

var __obj = {
  toString: function() {}
};


if (String(__obj).indexOf(void 0) !== 0) {
  throw new Test262Error('#1: __obj = {toString:function(){}}; String(__obj).indexOf(void 0) === 0. Actual: ' + String(__obj).indexOf(void 0));
}

