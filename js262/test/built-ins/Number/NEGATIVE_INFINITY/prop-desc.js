

/*---
esid: sec-number.negative_infinity
description: >
  "NEGATIVE_INFINITY" property of Number
info: |
  Number.NEGATIVE_INFINITY

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Number, "NEGATIVE_INFINITY");
verifyNotWritable(Number, "NEGATIVE_INFINITY");
verifyNotConfigurable(Number, "NEGATIVE_INFINITY");
