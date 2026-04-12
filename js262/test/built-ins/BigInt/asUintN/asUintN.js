

/*---
esid: sec-bigint.asuintn
description: BigInt.asUintN property descriptor
info: |
  BigInt.asUintN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt]
---*/

assert.sameValue(typeof BigInt.asUintN, 'function');

verifyProperty(BigInt, "asUintN", {
  enumerable: false,
  writable: true,
  configurable: true
});
