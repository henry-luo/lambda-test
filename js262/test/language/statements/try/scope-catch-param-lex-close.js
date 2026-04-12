

/*---
esid: sec-runtime-semantics-catchclauseevaluation
description: Removal of lexical environment for `catch` parameter
---*/

var probe, x;

try {
  throw 'inside';
} catch (x) {
  probe = function() { return x; };
}
x = 'outside';

assert.sameValue(x, 'outside');
assert.sameValue(probe(), 'inside');
