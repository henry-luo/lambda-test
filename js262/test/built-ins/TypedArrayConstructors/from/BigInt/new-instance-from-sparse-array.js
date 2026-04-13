

/*---
esid: sec-%typedarray%.from
description: >
  Throws a TypeError casting undefined value from sparse array to BigInt
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var source = [,42n];

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    TA.from(source);
  });
});
