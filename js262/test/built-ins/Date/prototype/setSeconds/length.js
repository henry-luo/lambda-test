

/*---
esid: sec-date.prototype.setseconds
description: >
  Date.prototype.setSeconds.length is 2.
info: |
  Date.prototype.setSeconds ( sec [ , ms ] )

  The "length" property of this method is 2𝔽.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the "length" property of a built-in function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype.setSeconds, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true,
});
