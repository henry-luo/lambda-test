

/*---
esid: sec-dataview.prototype
description: >
  The initial value of DataView.prototype is the DataView prototype object.
info: |
  The initial value of DataView.prototype is the intrinsic object
  %DataViewPrototype%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(DataView, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
