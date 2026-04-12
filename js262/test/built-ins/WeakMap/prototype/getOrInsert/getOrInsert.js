

/*---
esid: sec-weakmap.prototype.getOrInsert
description: |
  WeakMap.prototype.getOrInsert property descriptor
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
---*/
assert.sameValue(
  typeof WeakMap.prototype.getOrInsert,
  'function',
  'typeof WeakMap.prototype.getOrInsert is "function"'
);

verifyProperty(WeakMap.prototype, "getOrInsert", {
  value: WeakMap.prototype.getOrInsert,
  writable: true,
  enumerable: false,
  configurable: true
});

