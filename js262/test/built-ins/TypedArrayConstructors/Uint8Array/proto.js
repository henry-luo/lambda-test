

/*---
esid: sec-properties-of-the-typedarray-constructors
description: >
  The prototype of Uint8Array is %TypedArray%.
info: |
  The value of the [[Prototype]] internal slot of each TypedArray constructor is the %TypedArray% intrinsic object (22.2.1).
includes: [testTypedArray.js]
features: [TypedArray]
---*/

assert.sameValue(Object.getPrototypeOf(Uint8Array), TypedArray);
