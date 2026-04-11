

/*---
es6id: 13.1
description: >
    let: function local use before initialization in prior statement.
    (TDZ, Temporal Dead Zone)
---*/
assert.throws(ReferenceError, function() {
  (function() {
    x; let x;
  }());
});
