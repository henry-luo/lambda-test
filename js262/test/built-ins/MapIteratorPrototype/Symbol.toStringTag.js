

/*---
es6id: 23.1.5.2.2
description: >
   `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Map Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.iterator, Symbol.toStringTag]
---*/

var MapIteratorProto = Object.getPrototypeOf(new Map()[Symbol.iterator]());

assert.sameValue('Map Iterator', MapIteratorProto[Symbol.toStringTag]);

verifyProperty(MapIteratorProto, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});
