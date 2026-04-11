

/*---
esid: sec-disposablestack.prototype.use
description: Returns the argument provided.
info: |
  DisposableStack.prototype.use ( value )

  ...
  5. Return value.

features: [explicit-resource-management]
---*/

var stack = new DisposableStack();
var resource = { [Symbol.dispose]() { } };
assert.sameValue(stack.use(resource), resource);
assert.sameValue(stack.use(null), null);
assert.sameValue(stack.use(undefined), undefined);
