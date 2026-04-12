

/*---
info: Operator use ToString
esid: sec-parsefloat-string
description: Checking for Boolean object
---*/

assert.sameValue(parseFloat(new Boolean(true)), NaN, "new Boolean(true)");
assert.sameValue(parseFloat(new Boolean(false)), NaN, "new Boolean(false)");
