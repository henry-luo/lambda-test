

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: typeof Object (implements [[Call]]) === "function"
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Return a String according to Table 35.

  #table-35

  Object (implements [[Call]]) "function"


---*/

assert.sameValue(
  typeof Math.exp,
  "function",
  'typeof Math.exp === "function"'
);

assert.sameValue(
  typeof parseInt,
  "function",
  'typeof parseInt === "function"'
);

