

/*---
esid: sec-iterator.zipkeyed
description: >
  Iterator.zipKeyed has a "length" property whose value is 1.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [joint-iteration]
includes: [propertyHelper.js]
---*/

verifyProperty(Iterator.zipKeyed, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
