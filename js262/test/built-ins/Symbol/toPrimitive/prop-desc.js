

/*---
es6id: 19.4.2.12
description: >
    `Symbol.toPrimitive` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.toPrimitive]
---*/

assert.sameValue(typeof Symbol.toPrimitive, 'symbol');
verifyProperty(Symbol, 'toPrimitive', {
  writable: false,
  enumerable: false,
  configurable: false,
});
