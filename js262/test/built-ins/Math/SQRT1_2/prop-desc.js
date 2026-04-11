

/*---
esid: sec-math.sqrt1_2
description: >
  "SQRT1_2" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Math, 'SQRT1_2');
verifyNotWritable(Math, 'SQRT1_2');
verifyNotConfigurable(Math, 'SQRT1_2');
