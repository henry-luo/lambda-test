

/*---
esid: sec-bigint.prototype.valueof
description: BigInt.prototype.valueOf.name property descriptor
info: |
  BigInt.prototype.valueOf ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt.prototype.valueOf, "name", {
  value: "valueOf",
  writable: false,
  enumerable: false,
  configurable: true
});
