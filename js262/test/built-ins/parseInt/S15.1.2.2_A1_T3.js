

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: Checking for undefined and null
---*/

assert.sameValue(parseInt(undefined), NaN, 'parseInt(undefined) must return NaN');
assert.sameValue(parseInt(null), NaN, 'parseInt(null) must return NaN');
