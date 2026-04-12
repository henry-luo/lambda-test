

/*---
es6id: 21.1.3.3
description: >
  String.prototype.codePointAt.name value and descriptor.
info: |
  21.1.3.3 String.prototype.codePointAt ( pos )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype.codePointAt, "name", {
  value: "codePointAt",
  writable: false,
  enumerable: false,
  configurable: true
});
