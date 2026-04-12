

/*---
description: >
    Objects whose specified string property is enumerable satisfy the assertion.
includes: [propertyHelper.js]
---*/

var obj = {};
Object.defineProperty(obj, 'a', {
  enumerable: true
});

verifyEnumerable(obj, 'a');
