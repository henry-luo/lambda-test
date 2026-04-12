

/*---
info: Operator use ToNumber
esid: sec-parseint-string-radix
description: Checking for undefined and null
---*/

assert.sameValue(
  parseInt("11", undefined),
  parseInt("11", 10),
  'parseInt("11", undefined) must return the same value returned by parseInt("11", 10)'
);
assert.sameValue(parseInt("11", null), parseInt("11", 10), 'parseInt("11", null) must return the same value returned by parseInt("11", 10)');
