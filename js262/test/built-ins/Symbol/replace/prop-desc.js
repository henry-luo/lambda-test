

/*---
es6id: 19.4.2.8
description: >
    `Symbol.replace` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.replace]
---*/

assert.sameValue(typeof Symbol.replace, 'symbol');
verifyProperty(Symbol, 'replace', {
  writable: false,
  enumerable: false,
  configurable: false,
});
