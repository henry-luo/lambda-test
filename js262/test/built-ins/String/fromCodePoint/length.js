

/*---
es6id: 21.1.2.2
description: >
  The length property of the String.fromCodePoint constructor is 1.
includes: [propertyHelper.js]
features: [String.fromCodePoint]
---*/

verifyProperty(String.fromCodePoint, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
