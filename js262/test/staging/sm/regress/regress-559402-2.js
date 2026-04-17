

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var expect = undefined;
var actual = (function foo() { "bogus"; })();

assert.sameValue(expect, actual, "ok");
