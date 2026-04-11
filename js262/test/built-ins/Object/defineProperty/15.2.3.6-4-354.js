

/*---
es5id: 15.2.3.6-4-354
description: >
    ES5 Attributes - property ([[Writable]] is false, [[Enumerable]]
    is true, [[Configurable]] is true) is unwritable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: true,
  configurable: true
});

verifyProperty(obj, "prop", {
  value: 2010,
  writable: false,
});
