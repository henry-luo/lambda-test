

/*---
description: >
    Objects whose specified string property is not enumerable satisfy the
    assertion.
includes: [propertyHelper.js]
---*/

var obj = {};
Object.defineProperty(obj, 'a', {
  enumerable: false
});

verifyNotEnumerable(obj, 'a');
