

/*---
esid: sec-bigint.asintn
description: BigInt.asIntN.name descriptor
info: |
  BigInt.asIntN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.asIntN, "name", {
  value: "asIntN",
  enumerable: false,
  writable: false,
  configurable: true
});
