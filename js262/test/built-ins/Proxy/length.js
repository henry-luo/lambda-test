

/*---
es6id: 26.2.2
description: >
    Properties of the Proxy Constructor

    Besides the length property (whose value is 2)

includes: [propertyHelper.js]
features: [Proxy]
---*/

verifyProperty(Proxy, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
