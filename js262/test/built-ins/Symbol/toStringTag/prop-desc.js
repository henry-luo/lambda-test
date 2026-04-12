

/*---
es6id: 19.4.2.13
description: >
    `Symbol.toStringTag` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(typeof Symbol.toStringTag, 'symbol');
verifyProperty(Symbol, 'toStringTag', {
  writable: false,
  enumerable: false,
  configurable: false,
});
