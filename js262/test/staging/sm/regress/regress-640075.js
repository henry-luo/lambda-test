

/*---
flags:
  - onlyStrict
description: |
  pending
esid: pending
---*/

assert.throws(
    SyntaxError,
    () => eval("(function() { eval(); function eval() {} })")
)
