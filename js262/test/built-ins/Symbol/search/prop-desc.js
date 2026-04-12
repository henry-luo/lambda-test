

/*---
es6id: 19.4.2.9
description: >
    `Symbol.search` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.search]
---*/

assert.sameValue(typeof Symbol.search, 'symbol');
verifyProperty(Symbol, 'search', {
  writable: false,
  enumerable: false,
  configurable: false,
});
