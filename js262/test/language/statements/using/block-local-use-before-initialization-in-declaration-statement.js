

/*---
esid: sec-declarative-environment-records-getbindingvalue-n-s
description: >
    using: block local use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
features: [explicit-resource-management]
---*/

assert.throws(ReferenceError, function() {
  {
    using x = x + 1;
  }
});
