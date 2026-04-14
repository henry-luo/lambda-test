

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.forEach,
  "function",
  "`typeof Set.prototype.forEach` is `'function'`"
);

verifyProperty(Set.prototype, "forEach", {
  writable: true,
  enumerable: false,
  configurable: true,
});
