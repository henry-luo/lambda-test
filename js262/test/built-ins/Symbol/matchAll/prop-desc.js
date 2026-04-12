

/*---
esid: pending
description: |
    `Symbol.matchAll` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.matchAll]
---*/

assert.sameValue(typeof Symbol.matchAll, 'symbol');
verifyProperty(Symbol, 'matchAll', {
  writable: false,
  enumerable: false,
  configurable: false,
});
