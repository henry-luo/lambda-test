

/*---
esid: sec-json.parse
description: >
  JSON.parse.length is 2.
info: |
  JSON.parse ( text [ , reviver ] )

  The "length" property of the parse function is 2.

  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in Function
  object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(JSON.parse, 'length', {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true,
});
