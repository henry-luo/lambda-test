

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: Checking for boolean primitive
---*/

assert.sameValue(parseInt(true), NaN, 'parseInt(true) must return NaN');
assert.sameValue(parseInt(false), NaN, 'parseInt(false) must return NaN');
