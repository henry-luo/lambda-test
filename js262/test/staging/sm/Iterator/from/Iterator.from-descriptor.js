

/*---
info: |
  Descriptor property of Iterator.from

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator, 'from');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

