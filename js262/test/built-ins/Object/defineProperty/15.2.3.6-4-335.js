

/*---
es5id: 15.2.3.6-4-335
description: >
    ES5 Attributes - property ([[Writable]] is true, [[Enumerable]] is
    true, [[Configurable]] is false) is undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: false
});

verifyProperty(obj, "prop", {
  value: 2010,
  configurable: false,
});
