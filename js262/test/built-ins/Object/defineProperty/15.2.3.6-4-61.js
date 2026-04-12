

/*---
es5id: 15.2.3.6-4-61
description: >
    Object.defineProperty - both desc.value and name.value are
    undefined (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
  value: undefined
});

Object.defineProperty(obj, "foo", {
  value: undefined
});

verifyProperty(obj, "foo", {
  value: undefined,
  writable: false,
  enumerable: false,
  configurable: false,
});
