

/*---
esid: sec-atomics.notify
description: >
  Atomics.notify.name is "notify".
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics.notify, 'name', {
  value: 'notify',
  enumerable: false,
  writable: false,
  configurable: true,
});
