

/*---
esid: sec-bigint.prototype.valueof
description: BigInt.prototype.valueOf property descriptor
info: |
  BigInt.prototype.valueOf ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.prototype, "valueOf", {
  writable: true,
  enumerable: false,
  configurable: true
});
