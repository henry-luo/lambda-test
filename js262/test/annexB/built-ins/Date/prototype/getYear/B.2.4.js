

/*---
es5id: B.2.4
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.getYear)
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "getYear", {
  enumerable: false,
  writable: true,
  configurable: true
});
