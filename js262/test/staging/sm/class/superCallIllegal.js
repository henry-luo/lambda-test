

/*---
description: |
  pending
esid: pending
---*/


assert.throws(SyntaxError, () => new Function("super();"));
assert.throws(SyntaxError, () => eval("super()"));

