

/*---
info: |
  Descriptor property of Iterator.prototype.toArray

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype, 'toArray');
assert.sameValue(typeof propDesc.value, 'function');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

