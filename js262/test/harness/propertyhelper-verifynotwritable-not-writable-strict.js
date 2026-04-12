

/*---
description: >
    Objects whose specified property is not writable satisfy the assertion.
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, 'a', {
  writable: false,
  value: 123
});

verifyNotWritable(obj, 'a');

if (obj.a !== 123) {
  throw new Error('`verifyNotWritable` should be non-destructive.');
}
