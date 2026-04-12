

/*---
esid: sec-weakmap-iterable
description: >
    WeakMap ( [ iterable ] )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap, "name", {
  value: "WeakMap",
  writable: false,
  enumerable: false,
  configurable: true
});
