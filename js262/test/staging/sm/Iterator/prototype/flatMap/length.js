

/*---
esid: pending
description: |
  %Iterator.prototype%.flatMap length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
features:
  - Symbol.iterator
  - iterator-helpers
---*/
assert.sameValue(Iterator.prototype.flatMap.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.flatMap, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

