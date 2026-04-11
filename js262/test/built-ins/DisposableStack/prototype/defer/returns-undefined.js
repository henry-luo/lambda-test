

/*---
esid: sec-disposablestack.prototype.defer
description: Returns the argument provided.
info: |
  DisposableStack.prototype.defer ( onDispose )

  ...
  6. Return undefined.

features: [explicit-resource-management]
---*/

var stack = new DisposableStack();
assert.sameValue(stack.defer(_ => {}), undefined);
