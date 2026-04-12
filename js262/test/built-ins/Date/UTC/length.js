

/*---
esid: sec-date.utc
description: >
  Date.UTC.length is 7.
info: |
  Date.UTC ( year [ , month [ , date [ , hours [ , minutes [ , seconds [ , ms ] ] ] ] ] ] )

  The "length" property of this function is 7𝔽.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the "length" property of a built-in function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date.UTC, "length", {
  value: 7,
  writable: false,
  enumerable: false,
  configurable: true,
});
