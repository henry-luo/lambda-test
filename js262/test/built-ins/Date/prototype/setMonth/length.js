

/*---
esid: sec-date.prototype.setmonth
description: >
  Date.prototype.setMonth.length is 2.
info: |
  Date.prototype.setMonth ( month [ , date ] )

  The "length" property of this method is 2𝔽.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the "length" property of a built-in function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype.setMonth, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true,
});
