

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  DataView.prototype.setFloat16.name is "setFloat16".
features: [Float16Array]
includes: [propertyHelper.js]
---*/

verifyProperty(DataView.prototype.setFloat16, "name", {
  value: "setFloat16",
  writable: false,
  enumerable: false,
  configurable: true
});
