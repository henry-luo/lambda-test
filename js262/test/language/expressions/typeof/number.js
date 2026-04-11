

/*---
esid: sec-typeof-operator-runtime-semantics-evaluation
description: typeof Number literal
info: |
  The typeof Operator

  Runtime Semantics: Evaluation

    ...
    Return a String according to Table 35.

  #table-35

  Number "number"

---*/

assert.sameValue(
  typeof 1,
  "number",
  'typeof 1 === "number"'
);

assert.sameValue(
  typeof NaN,
  "number",
  'typeof NaN === "number"'
);

assert.sameValue(
  typeof Infinity,
  "number",
  'typeof Infinity === "number"'
);

assert.sameValue(
  typeof -Infinity,
  "number",
  'typeof -Infinity === "number"'
);

assert.sameValue(
  typeof Math.PI,
  "number",
  'typeof Math.PI === "number"'
);
