

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
    Set ( [ iterable ] )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype, "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
