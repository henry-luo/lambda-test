

/*---
esid: sec-properties-of-typedarray-prototype-objects
description: BigInt64Array.prototype prototype internal slot
info: |
  22.2.6 Properties of TypedArray Prototype Objects

  The value of the [[Prototype]] internal slot of a TypedArray prototype
  object is the intrinsic object %TypedArrayPrototype%. [...]
includes: [testTypedArray.js]
features: [BigInt, TypedArray]
---*/

assert.sameValue(Object.getPrototypeOf(BigInt64Array.prototype),
                 TypedArray.prototype);
