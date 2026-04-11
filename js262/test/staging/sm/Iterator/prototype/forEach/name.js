

/*---
description: |
  `name` property of Iterator.prototype.forEach.
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.forEach, 'name');
assert.sameValue(propDesc.value, 'forEach');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

