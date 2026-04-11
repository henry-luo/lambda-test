

/*---
esid: sec-object.values
description: Object.values should be writable, non-enumerable, and configurable
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "values", {
  writable: true,
  enumerable: false,
  configurable: true,
});
