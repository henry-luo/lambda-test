

/*---
es5id: 15.2.3.6-4-104
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    name.enumerable and desc.enumerable are different values (8.12.9
    step 12)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "foo", {
  enumerable: false,
  configurable: true
});

Object.defineProperty(obj, "foo", {
  enumerable: true
});

verifyProperty(obj, "foo", {
  value: undefined,
  writable: false,
  enumerable: true,
  configurable: true,
});
