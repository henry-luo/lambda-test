

/*---
es6id: B.2.5.1
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (RegExp.prototype.compile)
includes: [propertyHelper.js]
---*/

verifyProperty(RegExp.prototype, "compile", {
  enumerable: false,
  writable: true,
  configurable: true
});
