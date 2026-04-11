

/*---
es5id: 15.10.2.5-3-1
description: >
    Term - SyntaxError was thrown when max is finite and less than min
    (15.10.2.5 step 3)
---*/

assert.throws(SyntaxError, function() {
  var regExp = new RegExp("0{2,1}");
});
