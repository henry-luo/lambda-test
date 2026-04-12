

/*---
esid: sec-atomics.store
description: >
  Atomics.store.name is "store".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.store, 'name', {
  value: 'store',
  enumerable: false,
  writable: false,
  configurable: true,
});
