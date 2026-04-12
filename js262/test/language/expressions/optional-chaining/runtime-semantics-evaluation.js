

/*---
esid: prod-OptionalExpression
description: >
  accessing optional value on undefined or null returns undefined.
info: |
  If baseValue is undefined or null, then
    Return undefined.
features: [optional-chaining]
---*/

const nul = null;
const undf = undefined;
assert.sameValue(undefined, nul?.a);
assert.sameValue(undefined, undf?.b);
assert.sameValue(undefined, null?.a);
assert.sameValue(undefined, undefined?.b);
