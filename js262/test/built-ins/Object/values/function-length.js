

/*---
esid: sec-object.values
description: Object.values should have length 1
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object.values, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
