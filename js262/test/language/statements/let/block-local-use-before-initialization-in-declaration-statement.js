

/*---
es6id: 13.1
description: >
    let: block local use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
---*/
assert.throws(ReferenceError, function() {
  {
    let x = x + 1;
  }
});
