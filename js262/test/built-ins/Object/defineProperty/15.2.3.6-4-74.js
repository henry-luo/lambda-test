

/*---
es5id: 15.2.3.6-4-74
description: >
    Object.defineProperty - desc.writable and name.writable are two
    boolean values with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
  writable: false,
  configurable: true
});

Object.defineProperty(obj, "foo", {
  writable: true
});

verifyProperty(obj, "foo", {
  value: undefined,
  writable: true,
  enumerable: false,
  configurable: true,
});
