

/*---
description: |
  `name` property of Iterator.prototype.find.
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.find, 'name');
assert.sameValue(propDesc.value, 'find');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

