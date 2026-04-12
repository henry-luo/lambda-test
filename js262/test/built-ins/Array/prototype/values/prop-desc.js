

/*---
esid: sec-array.prototype.values
description: Array.prototype.values property descriptor
info: |
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Array.prototype.values, 'function');

verifyProperty(Array.prototype, "values", {
  writable: true,
  enumerable: false,
  configurable: true
});
