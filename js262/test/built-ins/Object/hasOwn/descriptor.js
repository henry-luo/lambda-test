

/*---
esid: sec-object.hasown
description: Testing descriptor property of Object.hasOwn
includes: [propertyHelper.js]
author: Jamie Kyle
features: [Object.hasOwn]
---*/

verifyProperty(Object, "hasOwn", {
  writable: true,
  enumerable: false,
  configurable: true,
});
