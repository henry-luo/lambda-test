

/*---
es5id: 15.2.3.6-3-179
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is
    null  (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  writable: null
});

verifyProperty(obj, "property", {
  writable: false,
});
