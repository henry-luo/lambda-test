

/*---
esid: sec-%typedarray%.from
description: >
  `from` is %TypedArray%.from
info: |
  22.2.1 The %TypedArray% Intrinsic Object

  The %TypedArray% intrinsic object is a constructor function object that all of
  the TypedArray constructor object inherit from.
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(
    TA.from, TypedArray.from,
    "method is inherited %TypedArray%.from"
  );
  assert.sameValue(
    TA.hasOwnProperty("from"), false,
    "constructor does not define an own property named 'from'"
  );
});
