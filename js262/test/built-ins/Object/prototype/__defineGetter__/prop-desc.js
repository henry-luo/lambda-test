

/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Property descriptor for Object.prototype.__defineGetter__
info: |
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [__getter__]
---*/

verifyProperty(Object.prototype, "__defineGetter__", {
  enumerable: false,
  writable: true,
  configurable: true,
});
