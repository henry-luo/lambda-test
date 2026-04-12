

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: typeof undefined and void 0
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Return a String according to Table 35.

  #table-35

  Undefined "undefined"
---*/

assert.sameValue(
  typeof undefined,
  "undefined",
  'typeof undefined === "undefined"'
);

assert.sameValue(
  typeof void 0,
  "undefined",
  'typeof void 0 === "undefined"'
);
