

/*---
es6id: 13.1
description: >
    const: block local use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
---*/
assert.throws(ReferenceError, function() {
  {
    const x = x + 1;
  }
});
