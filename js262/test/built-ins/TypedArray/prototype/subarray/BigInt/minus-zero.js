

/*---
esid: sec-%typedarray%.prototype.subarray
description: -0 values on begin and end
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert(
    compareArray(sample.subarray(-0), [40n, 41n, 42n, 43n]),
    "begin == -0"
  );
  assert(
    compareArray(sample.subarray(-0, 4), [40n, 41n, 42n, 43n]),
    "being == -0, end == length"
  );
  assert(
    compareArray(sample.subarray(0, -0), []),
    "being == 0, end == -0"
  );
  assert(
    compareArray(sample.subarray(-0, -0), []),
    "being == -0, end == -0"
  );
});
