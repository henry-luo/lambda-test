

/*---
esid: sec-map.groupby
description: Map.groupBy property length descriptor
info: |
  Map.groupBy ( items, callbackfn )

  ...

    17 ECMAScript Standard Built-in Objects

  ...

includes: [propertyHelper.js]
features: [array-grouping, Map]
---*/

verifyProperty(Map.groupBy, "length", {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});
