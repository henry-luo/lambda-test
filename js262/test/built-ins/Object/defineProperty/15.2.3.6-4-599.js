

/*---
es5id: 15.2.3.6-4-599
description: >
    ES5 Attributes - all attributes in Object.getOwnPropertyDescriptor
    are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "getOwnPropertyDescriptor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
