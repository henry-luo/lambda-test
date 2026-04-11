

/*---
esid: sec-object.values
description: Object.values should have name property with value 'values'
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object.values, "name", {
  value: "values",
  writable: false,
  enumerable: false,
  configurable: true,
});
