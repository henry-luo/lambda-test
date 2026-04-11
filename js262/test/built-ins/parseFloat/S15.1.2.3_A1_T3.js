

/*---
info: Operator use ToString
esid: sec-parsefloat-string
description: Checking for undefined and null
---*/

assert.sameValue(parseFloat(undefined), NaN, "undefined");
assert.sameValue(parseFloat(null), NaN, "null");
