

/*---
es6id: 21.1.2.4
description: >
  String.raw property descriptor
info: |
  String.raw ( template , ...substitutions )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(String, 'raw', {
  writable: true,
  enumerable: false,
  configurable: true
});
