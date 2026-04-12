

/*---
esid: sec-asyncdisposablestack.prototype.defer
description: Returns undefined.
info: |
  AsyncDisposableStack.prototype.defer ( onDisposeAsync )

  ...
  6. Return undefined.

features: [explicit-resource-management]
---*/

var stack = new AsyncDisposableStack();
assert.sameValue(stack.defer(_ => {}), undefined);
