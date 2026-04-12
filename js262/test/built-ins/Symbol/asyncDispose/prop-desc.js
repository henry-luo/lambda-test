

/*---
esid: sec-symbol.asyncdispose
description: >
    `Symbol.asyncDispose` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

assert.sameValue(typeof Symbol.asyncDispose, 'symbol');
verifyProperty(Symbol, 'asyncDispose', {
  writable: false,
  enumerable: false,
  configurable: false,
});
