

/*---
esid: sec-%arrayiteratorprototype%.next
description: >
    The method should exist on the ArrayIterator prototype, and it should be
    writable and configurable, but not enumerable.
includes: [propertyHelper.js]
features: [Symbol.iterator]
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

verifyProperty(ArrayIteratorProto, "next", {
  writable: true,
  enumerable: false,
  configurable: true
});
