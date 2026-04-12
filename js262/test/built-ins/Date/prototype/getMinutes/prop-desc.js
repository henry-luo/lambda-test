

/*---
esid: sec-date.prototype.getminutes
description: >
  Property descriptor for Date.prototype.getMinutes.
info: |
  Date.prototype.getMinutes ( )

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 19 through 28 and in
    Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "getMinutes", {
  writable: true,
  enumerable: false,
  configurable: true,
});
