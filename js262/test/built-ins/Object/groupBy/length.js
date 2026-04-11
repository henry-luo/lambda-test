

/*---
esid: sec-object.groupby
description: Object.groupBy property length descriptor
info: |
  Object.groupBy ( items, callbackfn )

  ...

    17 ECMAScript Standard Built-in Objects

  ...

includes: [propertyHelper.js]
features: [array-grouping]
---*/

verifyProperty(Object.groupBy, "length", {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});
