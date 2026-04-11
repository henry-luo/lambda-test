

/*---
esid: sec-symbol.prototype.valueof
description: Property descriptor
info: |
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [Symbol]
---*/

assert.sameValue(typeof Symbol.prototype.valueOf, 'function');

verifyProperty(Symbol.prototype, 'valueOf', {
  writable: true,
  enumerable: false,
  configurable: true,
});
