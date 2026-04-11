

/*---
esid: sec-bigint.prototype.tostring
description: BigInt.prototype.toString.length property descriptor
info: |
  BigInt.prototype.toString ( [ radix ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.prototype.toString, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
