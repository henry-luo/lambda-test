

/*---
description: The prototype of SuppressedError constructor is Error
esid: sec-properties-of-the-suppressederror-constructors
info: |
  Properties of the SuppressedError Constructor

  - has a [[Prototype]] internal slot whose value is the intrinsic object %Error%.
features: [explicit-resource-management]
---*/

var proto = Object.getPrototypeOf(SuppressedError);

assert.sameValue(proto, Error);
