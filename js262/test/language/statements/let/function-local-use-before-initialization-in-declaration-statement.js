

/*---
es6id: 13.1
description: >
    let: function local use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
---*/
assert.throws(ReferenceError, function() {
  (function() {
    let x = x + 1;
  }());
});
