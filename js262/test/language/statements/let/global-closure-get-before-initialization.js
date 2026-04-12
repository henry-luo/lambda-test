

/*---
es6id: 13.1
description: >
    let: global closure [[Get]] before initialization.
    (TDZ, Temporal Dead Zone)
---*/
function f() { return x + 1; }

assert.throws(ReferenceError, function() {
  f();
});

let x;
