

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
{
  function f() { return "inner"; }
}

function f() { return "outer"; }

assert.sameValue(f(), "inner");
