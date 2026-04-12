

/*---
esid: prod-OptionalExpression
description: >
  optional chain in test portion of do while statement
info: |
  IterationStatement
    do Statement while (OptionalExpression)
features: [optional-chaining]
---*/
let count = 0;
const obj = {a: true};
do {
  count++;
  break;
} while (obj?.a);
assert.sameValue(1, count);
