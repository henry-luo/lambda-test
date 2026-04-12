

/*---
es5id: 15.2.3.6-4-349
description: >
    ES5 Attributes - property ([[Writable]] is true, [[Enumerable]] is
    false, [[Configurable]] is false) is undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: false,
  configurable: false
});

verifyProperty(obj, "prop", {
  value: 2010,
  configurable: false,
});
