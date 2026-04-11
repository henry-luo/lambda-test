

/*---
esid: sec-properties-of-typedarray-prototype-objects
description: >
  The prototype of Uint8Array.prototype is %TypedArrayPrototype%.
info: |
  The value of the [[Prototype]] internal slot of a TypedArray prototype
  object is the intrinsic object %TypedArrayPrototype% (22.2.3).
includes: [testTypedArray.js]
features: [TypedArray]
---*/

assert.sameValue(Object.getPrototypeOf(Uint8Array.prototype), TypedArray.prototype);
