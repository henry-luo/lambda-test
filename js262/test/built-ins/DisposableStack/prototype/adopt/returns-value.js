

/*---
esid: sec-disposablestack.prototype.adopt
description: Returns the argument provided.
info: |
  DisposableStack.prototype.adopt ( value, onDispose )

  ...
  8. Return value.

features: [explicit-resource-management]
---*/

var stack = new DisposableStack();
var resource = {};
assert.sameValue(stack.adopt(resource, _ => {}), resource);
assert.sameValue(stack.adopt(null, _ => {}), null);
assert.sameValue(stack.adopt(undefined, _ => {}), undefined);
