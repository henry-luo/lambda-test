

/*---
esid: sec-symbol-constructor
description: >
  Symbol ( [ description ] )

includes: [propertyHelper.js]
features: [Symbol]
---*/

verifyProperty(Symbol, "name", {
  value: "Symbol",
  writable: false,
  enumerable: false,
  configurable: true
});
