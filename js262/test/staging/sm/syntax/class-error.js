

/*---
description: |
  pending
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval("class X { x: 1 }");
});
