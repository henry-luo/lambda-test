

/*---
esid: sec-date.prototype.settime
description: >
  Property descriptor for Date.prototype.setTime.
info: |
  Date.prototype.setTime ( time )

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 19 through 28 and in
    Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "setTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
