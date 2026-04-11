

/*---
es6id: 19.4.2.14
description: >
    `Symbol.unscopables` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.unscopables]
---*/

assert.sameValue(typeof Symbol.unscopables, 'symbol');
verifyProperty(Symbol, 'unscopables', {
  writable: false,
  enumerable: false,
  configurable: false,
});
