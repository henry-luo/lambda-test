

/*---
description: >
    Objects whose specified symbol property is enumerable satisfy the assertion.
includes: [propertyHelper.js]
features: [Symbol]
---*/

var obj = {};
var s = Symbol('1');
Object.defineProperty(obj, s, {
  enumerable: true
});

verifyEnumerable(obj, s);
