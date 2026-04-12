

/*---
esid: sec-get-set.prototype.size
description: >
    get Set.prototype.size

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Set.prototype, "size");


verifyProperty(descriptor.get, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
