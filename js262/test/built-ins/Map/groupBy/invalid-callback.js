

/*---
esid: sec-map.groupby
description: Map.groupBy called with non-callable throws TypeError
info: |
  Map.groupBy ( items, callbackfn )

  ...
  GroupBy ( items, callbackfn, coercion )

  2. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
features: [array-grouping, Map]
---*/


assert.throws(TypeError, function() {
  Map.groupBy([], null)
}, "null callback throws TypeError");

assert.throws(TypeError, function() {
  Map.groupBy([], undefined)
}, "undefined callback throws TypeError");

assert.throws(TypeError, function() {
  Map.groupBy([], {})
}, "object callback throws TypeError");
