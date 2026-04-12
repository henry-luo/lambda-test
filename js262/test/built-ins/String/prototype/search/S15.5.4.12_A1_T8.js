

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T8
description: >
    Argument is void 0, and instance is String object with overrided
    toString function
---*/

var __obj = {
  toString: function() {}
};


if (String(__obj).search(void 0) !== 0) {
  throw new Test262Error('#1: __obj = {toString:function(){}}; String(__obj).search(void 0) === 0. Actual: ' + String(__obj).search(void 0));
}

