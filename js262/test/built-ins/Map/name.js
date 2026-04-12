

/*---
esid: sec-map-iterable
description: Map.name value and descriptor.
info: |
  Map ( [ iterable ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Map, "name", {
  value: "Map",
  writable: false,
  enumerable: false,
  configurable: true
});
