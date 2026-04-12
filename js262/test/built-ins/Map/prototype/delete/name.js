

/*---
esid: sec-map.prototype.delete
description: >
  Map.prototype.delete.name value and descriptor.
info: |
  Map.prototype.delete ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map.prototype.delete, "name", {
  value: "delete",
  writable: false,
  enumerable: false,
  configurable: true
});
