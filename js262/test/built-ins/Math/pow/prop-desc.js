

/*---
esid: sec-math.pow
description: >
  Math.pow ( base, exponent )
info: |
  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 18 through 26 and in Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, "pow", {
  writable: true,
  enumerable: false,
  configurable: true
});
