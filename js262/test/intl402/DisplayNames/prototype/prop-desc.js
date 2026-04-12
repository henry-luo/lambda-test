

/*---
esid: sec-Intl.DisplayNames.prototype
description: >
  Property descriptor of Intl.DisplayNames.prototype
info: |
  The value of Intl.DisplayNames.prototype is %DisplayNamesPrototype%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Intl.DisplayNames]
---*/

verifyProperty(Intl.DisplayNames, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
