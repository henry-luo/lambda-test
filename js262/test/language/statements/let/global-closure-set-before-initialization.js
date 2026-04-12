

/*---
es6id: 13.1
description: >
    let: global closure [[Set]] before initialization.
    (TDZ, Temporal Dead Zone)
---*/
function f() { x = 1; }

assert.throws(ReferenceError, function() {
  f();
});

let x;
