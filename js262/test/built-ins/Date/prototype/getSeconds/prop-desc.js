

/*---
esid: sec-date.prototype.getseconds
description: >
  Property descriptor for Date.prototype.getSeconds.
info: |
  Date.prototype.getSeconds ( )

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 19 through 28 and in
    Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "getSeconds", {
  writable: true,
  enumerable: false,
  configurable: true,
});
