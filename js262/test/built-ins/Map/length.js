

/*---
es6id: 23.1.2
description: Map.length is 0.
info: |
  Properties of the Map Constructor

  Besides the length property (whose value is 0)
includes: [propertyHelper.js]
---*/

verifyProperty(Map, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
