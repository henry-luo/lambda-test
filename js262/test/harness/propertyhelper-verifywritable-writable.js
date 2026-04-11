

/*---
description: >
    Objects whose specified property is writable satisfy the assertion.
includes: [propertyHelper.js]
---*/
var obj = {};

Object.defineProperty(obj, 'a', {
  writable: true,
  value: 123
});

verifyWritable(obj, 'a');

if (obj.a !== 123) {
  throw new Error('`verifyWritable` should be non-destructive.');
}
