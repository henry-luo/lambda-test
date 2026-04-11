

/*---
description: >
    Generator objects should define a `prototype` property.
includes: [propertyHelper.js]
es6id: 25.2.4
features: [generators]
---*/

function* g() {}

verifyProperty(g, "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
