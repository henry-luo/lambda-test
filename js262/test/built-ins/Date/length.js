

/*---
esid: sec-properties-of-the-date-constructor
description: >
  Date.length is 7.
info: |
  Properties of the Date Constructor

  The Date constructor has a "length" property whose value is 7𝔽.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the "length" property of a built-in function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date, "length", {
  value: 7,
  writable: false,
  enumerable: false,
  configurable: true,
});
