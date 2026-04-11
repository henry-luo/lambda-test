

/*---
esid: sec-number.positive_infinity
description: >
  "POSITIVE_INFINITY" property of Number
info: |
  Number.POSITIVE_INFINITY

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Number, "POSITIVE_INFINITY");
verifyNotWritable(Number, "POSITIVE_INFINITY");
verifyNotConfigurable(Number, "POSITIVE_INFINITY");
