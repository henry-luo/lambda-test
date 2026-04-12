

/*---
esid: sec-string.prototype.link
es6id: B.2.3.10
description: Property descriptor for String.prototype.link
info: |
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype, "link", {
  enumerable: false,
  writable: true,
  configurable: true
});
