

/*---
esid: sec-declarative-environment-records-getbindingvalue-n-s
description: >
    using: global use before initialization in prior statement.
    (TDZ, Temporal Dead Zone)
negative:
  phase: runtime
  type: ReferenceError
features: [explicit-resource-management]
---*/

{
  x; using x = null;
}
