

/*---
info: |
  Descriptor property of Iterator.prototype.every

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype, 'every');
assert.sameValue(typeof propDesc.value, 'function');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

