

/*---
esid: sec-map-iterable
description: >
  Map descriptor as a standard built-in object.
info: |
  Map ( [ iterable ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(this, 'Map', {
  writable: true,
  enumerable: false,
  configurable: true
});
