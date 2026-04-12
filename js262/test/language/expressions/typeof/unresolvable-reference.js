

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: If IsUnresolvableReference(val) is true, return "undefined".
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    If Type(val) is Reference, then
      If IsUnresolvableReference(val) is true, return "undefined".
    ...

---*/

assert.sameValue(
  typeof x,
  "undefined",
  "typeof x === 'undefined'"
);
