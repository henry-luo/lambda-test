

/*---
esid: sec-Intl.ListFormat.prototype
description: >
    Checks the "prototype" property of the ListFormat constructor.
info: |
    Intl.ListFormat.prototype

    The value of Intl.ListFormat.prototype is %ListFormatPrototype%.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Intl.ListFormat]
---*/

verifyProperty(Intl.ListFormat, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
