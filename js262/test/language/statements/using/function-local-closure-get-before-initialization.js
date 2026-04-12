

/*---
esid: sec-declarative-environment-records-getbindingvalue-n-s
description: >
    using: function local closure [[Get]] before initialization.
    (TDZ, Temporal Dead Zone)
features: [explicit-resource-management]
---*/

(function() {
  function f() { return x + 1; }

  assert.throws(ReferenceError, function() {
    f();
  });

  using x = null;
}());
