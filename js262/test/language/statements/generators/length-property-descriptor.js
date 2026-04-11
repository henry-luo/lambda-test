

/*---
description: >
    Generator functions should define a `length` property.
includes: [propertyHelper.js]
es6id: 25.2.4
features: [generators]
---*/

function* g() {}

verifyProperty(g, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true,
});
