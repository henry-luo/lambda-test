

/*---
esid: sec-date.prototype.gettimezoneoffset
description: >
  Property descriptor for Date.prototype.getTimezoneOffset.
info: |
  Date.prototype.getTimezoneOffset ( )

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 19 through 28 and in
    Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "getTimezoneOffset", {
  writable: true,
  enumerable: false,
  configurable: true,
});
