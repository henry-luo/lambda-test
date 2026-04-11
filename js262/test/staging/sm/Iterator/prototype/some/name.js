

/*---
description: |
  `name` property of Iterator.prototype.some.
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.some, 'name');
assert.sameValue(propDesc.value, 'some');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

