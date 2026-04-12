

/*---
es6id: 26.2.1.1
description: >
    Proxy ( target, handler )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Proxy]
---*/

verifyProperty(Proxy, "name", {
  value: "Proxy",
  writable: false,
  enumerable: false,
  configurable: true
});
