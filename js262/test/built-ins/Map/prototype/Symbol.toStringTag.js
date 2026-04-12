

/*---
esid: sec-map.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Map".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(Map.prototype[Symbol.toStringTag], 'Map');

verifyProperty(Map.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});
