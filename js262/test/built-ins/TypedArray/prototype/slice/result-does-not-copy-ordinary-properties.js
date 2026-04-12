

/*---
esid: sec-%typedarray%.prototype.slice
description: Result does not import own properties
info: |
  22.2.3.24 %TypedArray%.prototype.slice( start , end )
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA, makeCtorArg) {
  var sample = new TA(makeCtorArg([41, 42, 43, 44]));
  sample.foo = 42;

  var result = sample.slice();
  assert.sameValue(
    result.hasOwnProperty("foo"),
    false,
    "does not import own property"
  );
});
