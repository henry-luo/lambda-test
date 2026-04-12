

/*---
description: Object.getOwnPropertyDescriptors should have length 1
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object.getOwnPropertyDescriptors, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
