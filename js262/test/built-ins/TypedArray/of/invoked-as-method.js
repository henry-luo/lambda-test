

/*---
esid: sec-%typedarray%.of
description: >
  "of" cannot be invoked as a method of %TypedArray%
info: |
  22.2.2.2 %TypedArray%.of ( ...items )

  ...
  5. Let newObj be ? TypedArrayCreate(C, «len»).
  ...

  22.2.4.6 TypedArrayCreate ( constructor, argumentList )

  1. Let newTypedArray be ? Construct(constructor, argumentList).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

assert.throws(TypeError, function() {
  TypedArray.of();
});
