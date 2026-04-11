

/*---
es6id: 14.5
description: >
    class name binding in extends expression
---*/
assert.throws(ReferenceError, function() {
  class x extends x {}
});
