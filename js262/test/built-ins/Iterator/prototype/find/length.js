

/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find has a "length" property whose value is 1.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

verifyProperty(Iterator.prototype.find, 'length', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
