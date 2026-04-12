

/*---
es6id: 13.1
description: >
    let: function local closure [[Set]] before initialization.
    (TDZ, Temporal Dead Zone)
---*/
(function() {
  function f() { x = 1; }

  assert.throws(ReferenceError, function() {
    f();
  });

  let x;
}());
