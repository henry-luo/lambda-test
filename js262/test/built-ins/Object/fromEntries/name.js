

/*---
description: Object.fromEntries.name is "fromEntries".
esid: sec-object.fromentries
includes: [propertyHelper.js]
features: [Object.fromEntries]
---*/

verifyProperty(Object.fromEntries, "name", {
  value: "fromEntries",
  enumerable: false,
  writable: false,
  configurable: true
});
