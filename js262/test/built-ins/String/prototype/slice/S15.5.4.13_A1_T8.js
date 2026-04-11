

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T8
description: >
    Arguments are negative number and void 0, and instance is
    String(object), object have overrided toString function
---*/

var __obj = {
  toString: function() {}
};


if (String(__obj).slice(-4, void 0) !== "ined") {
  throw new Test262Error('#1: __obj = {toString:function(){}}; String(__obj).slice(-4,void 0) === "ined". Actual: ' + String(__obj).slice(-4, void 0));
}

