

/*---
es5id: 15.2.3.6-4-82
description: >
    Object.defineProperty - desc.configurable and name.configurable
    are boolean negation of each other (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", {
  configurable: true
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
