

/*---
esid: sec-map.groupby
description: Map.groupBy property name descriptor
info: |
  Map.groupBy ( items, callbackfn )

  ...

    17 ECMAScript Standard Built-in Objects

  ...

includes: [propertyHelper.js]
features: [array-grouping, Map]
---*/

verifyProperty(Map.groupBy, "name", {
  value: "groupBy",
  enumerable: false,
  writable: false,
  configurable: true
});
