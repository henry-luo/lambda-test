

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function f() {
  var probeParam, probeBlock;
  let x = 'outside';

  try {
    throw [];
  } catch ([_ = probeParam = function() { return x; }]) {
    probeBlock = function() { return x; };
    let x = 'inside';
  }

  assert.sameValue(probeBlock(), 'inside');
  assert.sameValue(probeParam(), 'outside');
}

f();

