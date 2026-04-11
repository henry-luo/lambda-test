

/*---
es6id: 13.1
description: >
    const: function local use before initialization in prior statement.
    (TDZ, Temporal Dead Zone)
---*/
assert.throws(ReferenceError, function() {
  (function() {
    x; const x = 1;
  }());
});
