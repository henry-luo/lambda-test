

/*---
esid: sec-symbol-constructor
description: >
  Properties of the Symbol Constructor

  Besides the length property (whose value is 0)

includes: [propertyHelper.js]
features: [Symbol]
---*/

verifyProperty(Symbol, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
