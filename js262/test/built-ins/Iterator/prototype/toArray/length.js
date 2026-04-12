

/*---
esid: sec-iteratorprototype.toArray
description: >
  Iterator.prototype.toArray has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

verifyProperty(Iterator.prototype.toArray, 'length', {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true,
});
