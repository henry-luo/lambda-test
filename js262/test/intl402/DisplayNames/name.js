

/*---
esid: sec-Intl.DisplayNames
description: >
  Intl.DisplayNames.name is "DisplayNames".
info: |
  17 ECMAScript Standard Built-in Objects:

  Every built-in Function object, including constructors, that is not
  identified as an anonymous function has a name property whose value is a
  String.

  Unless otherwise specified, the name property of a built-in Function object,
  if it exists, has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Intl.DisplayNames]
---*/

verifyProperty(Intl.DisplayNames, "name", {
  value: "DisplayNames",
  writable: false,
  enumerable: false,
  configurable: true,
});
