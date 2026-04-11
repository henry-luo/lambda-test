

/*---
esid: sec-bigint-constructor
description: >
  Property descriptor of BigInt
info: |
  The BigInt Object

  ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(this, "BigInt", {
  enumerable: false,
  writable: true,
  configurable: true
});
