

/*---
esid: sec-dataview.prototype.getbiguint64
description: DataView.prototype.getBigUint64.length property descriptor
includes: [propertyHelper.js]
features: [DataView, ArrayBuffer, BigInt]
---*/

verifyProperty(DataView.prototype.getBigUint64, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
