

/*---
esid: sec-%typedarray%.of
description: >
  `of` is %TypedArray%.of
info: |
  22.2.1 The %TypedArray% Intrinsic Object

  The %TypedArray% intrinsic object is a constructor function object that all of
  the TypedArray constructor object inherit from.
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(
    TA.of, TypedArray.of,
    "method is inherited %TypedArray%.of"
  );
  assert.sameValue(
    TA.hasOwnProperty("of"), false,
    "constructor does not define an own property named 'of'"
  );
});
