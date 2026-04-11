

/*---
es5id: 15.2.3.6-4-377
description: >
    ES5 Attributes - property ([[Writable]] is false, [[Enumerable]]
    is false, [[Configurable]] is false) is undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: false,
  configurable: false
});

verifyProperty(obj, "prop", {
  configurable: false,
});
