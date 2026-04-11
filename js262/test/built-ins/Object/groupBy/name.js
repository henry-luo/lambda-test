

/*---
esid: sec-object.groupby
description: Object.groupBy property name descriptor
info: |
  Object.groupBy ( items, callbackfn )

  ...

    17 ECMAScript Standard Built-in Objects

  ...

includes: [propertyHelper.js]
features: [array-grouping]
---*/

verifyProperty(Object.groupBy, "name", {
  value: "groupBy",
  enumerable: false,
  writable: false,
  configurable: true
});
