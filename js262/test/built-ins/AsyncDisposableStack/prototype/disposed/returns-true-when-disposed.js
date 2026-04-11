

/*---
esid: sec-get-asyncdisposablestack.prototype.disposed
description: >
  Returns `true` after the AsyncDisposableStack has been disposed.
info: |
  get AsyncDisposableStack.prototype.disposed

  ...
  3. If asyncDisposableStack.[[AsyncDisposableState]] is disposed, return true.
  4. Otherwise, return false.

features: [explicit-resource-management]
---*/

var stack = new AsyncDisposableStack();
stack.disposeAsync();
assert.sameValue(stack.disposed, true);
