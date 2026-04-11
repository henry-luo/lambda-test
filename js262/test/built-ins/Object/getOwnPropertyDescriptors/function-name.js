

/*---
description: Object.getOwnPropertyDescriptors should have name property with value 'getOwnPropertyDescriptors'
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object.getOwnPropertyDescriptors, "name", {
  value: "getOwnPropertyDescriptors",
  writable: false,
  enumerable: false,
  configurable: true,
});
