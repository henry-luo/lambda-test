

/*---
esid: sec-bigint.prototype.tostring
description: BigInt.prototype.toString.name property descriptor
info: |
  BigInt.prototype.toString ( [ radix ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.prototype.toString, "name", {
  value: "toString",
  writable: false,
  enumerable: false,
  configurable: true
});
