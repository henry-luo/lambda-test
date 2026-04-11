

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: Operator "typeof" uses GetValue
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Set val to ? GetValue(val).
    ...

  GetValue ( V ):

    ...
    If IsUnresolvableReference(V) is true, throw a ReferenceError exception.

---*/

assert.throws(ReferenceError, function() {
  typeof x.x;
});
