

/*---
esid: sec-bigint.asuintn
description: BigInt.asUintN.length descriptor
info: |
  BigInt.asUintN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.asUintN, "length", {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});
