

/*---
esid: sec-properties-of-the-suppressederror-prototype-objects
description: The prototype of SuppressedError.prototype constructor is Error.prototype
info: |
  Properties of the SuppressedError Prototype Object

  - has a [[Prototype]] internal slot whose value is the intrinsic object %Error.prototype%.
features: [explicit-resource-management]
---*/

var proto = Object.getPrototypeOf(SuppressedError.prototype);

assert.sameValue(proto, Error.prototype);
