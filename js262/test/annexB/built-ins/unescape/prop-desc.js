

/*---
es5id: B.2.2
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Global.unescape)
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof this.unescape, "function");
assert.sameValue(typeof this["unescape"], "function");

verifyProperty(this, "unescape", {
  writable: true,
  enumerable: false,
  configurable: true
});
