

/*---
esid: sec-get-disposablestack.prototype.disposed
description: >
  Returns `true` after the DisposableStack has been disposed.
info: |
  get DisposableStack.prototype.disposed

  ...
  3. If disposableStack.[[DisposableState]] is disposed, return true.
  4. Otherwise, return false.

features: [explicit-resource-management]
---*/

var stack = new DisposableStack();
stack.dispose();
assert.sameValue(stack.disposed, true);
