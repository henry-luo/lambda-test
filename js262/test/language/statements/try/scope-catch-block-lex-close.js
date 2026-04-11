

/*---
esid: sec-runtime-semantics-catchclauseevaluation
description: Removal of lexical environment for `catch` block
info: |
    [...]
    8. Let B be the result of evaluating Block.
    [...]
features: [let]
---*/

var probe, x;

try {
  throw null;
} catch (_) {
  let x = 'inside';
  probe = function() { return x; };
}
x = 'outside';

assert.sameValue(x, 'outside');
assert.sameValue(probe(), 'inside');
