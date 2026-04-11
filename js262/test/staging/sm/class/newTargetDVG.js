

/*---
description: |
  pending
esid: pending
---*/

function thunk() {
    new.target();
}
assert.throws(TypeError, thunk);

