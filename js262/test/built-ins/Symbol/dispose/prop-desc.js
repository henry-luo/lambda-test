

/*---
esid: sec-symbol.dispose
description: >
    `Symbol.dispose` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

assert.sameValue(typeof Symbol.dispose, 'symbol');
verifyProperty(Symbol, 'dispose', {
  writable: false,
  enumerable: false,
  configurable: false,
});
