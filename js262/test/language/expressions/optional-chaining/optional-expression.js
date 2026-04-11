

/*---
esid: prod-OptionalExpression
description: >
  optional chain on recursive optional expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      OptionalExpression OptionalChain
features: [optional-chaining]
---*/

const obj = {
  a: {
    b: 22
  }
};

function fn () {
  return {};
}


assert.sameValue(22, obj?.a?.b);

assert.sameValue(undefined, fn()?.a?.b);
