

/*---
description: |
  pending
esid: pending
---*/

assert.throws(TypeError, function() {
  new {prototype: TypeError.prototype};
});
