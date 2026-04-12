

/*---
info: If Z is empty, return NaN
esid: sec-parseint-string-radix
description: Complex test. R in [2, 36]
---*/


for (var i = 2; i <= 36; i++) {
  assert.sameValue(parseInt("$string", i), NaN, 'parseInt("$string", i) must return NaN');
}
