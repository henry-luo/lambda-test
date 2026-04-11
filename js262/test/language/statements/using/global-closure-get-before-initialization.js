

/*---
esid: sec-declarative-environment-records-getbindingvalue-n-s
description: >
    using: global closure [[Get]] before initialization.
    (TDZ, Temporal Dead Zone)
features: [explicit-resource-management]
---*/

{
  function f() { return x + 1; }

  assert.throws(ReferenceError, function() {
    f();
  });

  using x = null;
}
