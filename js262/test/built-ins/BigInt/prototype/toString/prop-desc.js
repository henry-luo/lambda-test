

/*---
esid: sec-bigint.prototype.tostring
description: BigInt.prototype.toString property descriptor
info: |
  BigInt.prototype.toString ( [ radix ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true
});
