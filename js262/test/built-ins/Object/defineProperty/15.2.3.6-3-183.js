

/*---
es5id: 15.2.3.6-3-183
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is +0
    (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  writable: +0
});

verifyProperty(obj, "property", {
  writable: false,
});
