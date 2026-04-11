

/*---
esid: sec-weakset-iterable
description: >
    WeakSet ( [ iterable ] )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet, "name", {
  value: "WeakSet",
  writable: false,
  enumerable: false,
  configurable: true
});
