

/*---
esid: sec-typedarray-objects
description: BigUint64Array property descriptor
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(this, "BigUint64Array", {
  writable: true,
  enumerable: false,
  configurable: true
});
