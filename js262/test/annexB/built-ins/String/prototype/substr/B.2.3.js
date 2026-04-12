

/*---
es5id: B.2.3
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (String.prototype.substr)
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype, "substr", {
  enumerable: false,
  writable: true,
  configurable: true
});
