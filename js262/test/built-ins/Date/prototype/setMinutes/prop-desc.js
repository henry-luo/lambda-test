

/*---
esid: sec-date.prototype.setminutes
description: >
  Property descriptor for Date.prototype.setMinutes.
info: |
  Date.prototype.setMinutes ( min [ , sec [ , ms ] ] )

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 19 through 28 and in
    Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "setMinutes", {
  writable: true,
  enumerable: false,
  configurable: true,
});
