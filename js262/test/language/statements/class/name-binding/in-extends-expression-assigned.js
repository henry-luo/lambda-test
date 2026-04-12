

/*---
es6id: 14.5
description: >
    class name binding in extends expression, assigned
---*/
assert.throws(ReferenceError, function() {
  var x = (class x extends x {});
});
