

/*---
esid: sec-dataview-constructor
description: >
  The name property of DataView is "DataView"
includes: [propertyHelper.js]
---*/

verifyProperty(DataView, "name", {
  value: "DataView",
  writable: false,
  enumerable: false,
  configurable: true
});
