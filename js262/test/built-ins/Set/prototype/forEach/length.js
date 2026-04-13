

/*---
esid: sec-set.prototype.forEach
description: >
    Set.prototype.forEach ( callbackfn [ , thisArg ] )

    The length property of the forEach method is 1.

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.forEach, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
