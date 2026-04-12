

/*---
esid: sec-runtime-semantics-catchclauseevaluation
description: Retainment of existing variable environment for `catch` block
info: |
    [...]
    8. Let B be the result of evaluating Block.
    [...]
---*/

var x = 1;
var probeBefore = function() { return x; };
var probeInside;

try {
  throw null;
} catch (_) {
  var x = 2;
  probeInside = function() { return x; };
}

assert.sameValue(probeBefore(), 2, 'reference preceding statement');
assert.sameValue(probeInside(), 2, 'reference within statement');
assert.sameValue(x, 2, 'reference following statement');
