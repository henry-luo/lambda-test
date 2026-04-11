

/*---
description: Object.getOwnPropertyDescriptors should be writable, non-enumerable, and configurable
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "getOwnPropertyDescriptors", {
  writable: true,
  enumerable: false,
  configurable: true,
});
