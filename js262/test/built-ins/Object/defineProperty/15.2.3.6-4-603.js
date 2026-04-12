

/*---
es5id: 15.2.3.6-4-603
description: >
    ES5 Attributes - all attributes in Object.defineProperties are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "defineProperties", {
  writable: true,
  enumerable: false,
  configurable: true,
});
