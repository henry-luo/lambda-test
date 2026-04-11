

/*---
info: Operator use ToString
esid: sec-parsefloat-string
description: Checking for boolean primitive
---*/

assert.sameValue(parseFloat(true), NaN, "true");
assert.sameValue(parseFloat(false), NaN, "false");
