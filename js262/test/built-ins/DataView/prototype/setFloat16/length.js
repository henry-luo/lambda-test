

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  DataView.prototype.setFloat16.length is 2.
features: [Float16Array]
includes: [propertyHelper.js]
---*/

verifyProperty(DataView.prototype.setFloat16, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
