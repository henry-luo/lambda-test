

/*---
es6id: 19.1.2.10
description: >
    Object.is ( value1, value2 )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Object.is, "function");

verifyProperty(Object, "is", {
  writable: true,
  enumerable: false,
  configurable: true,
});
