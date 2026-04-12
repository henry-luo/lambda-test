

/*---
esid: sec-%typedarray%.from
description: >
  "from" cannot be invoked as a method of %TypedArray%
info: |
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  8. Let targetObj be ? TypedArrayCreate(C, «len»).
  ...

  22.2.4.6 TypedArrayCreate ( constructor, argumentList )

  1. Let newTypedArray be ? Construct(constructor, argumentList).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

assert.throws(TypeError, function() {
  TypedArray.from([]);
});
