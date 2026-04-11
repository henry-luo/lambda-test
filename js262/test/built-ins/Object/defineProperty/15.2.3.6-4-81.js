

/*---
es5id: 15.2.3.6-4-81
description: >
    Object.defineProperty - both desc.configurable and
    name.configurable are booleans with the same value (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
  configurable: false
});

Object.defineProperty(obj, "foo", {
  configurable: false
});

verifyProperty(obj, "foo", {
  value: undefined,
  writable: false,
  enumerable: false,
  configurable: false,
});
