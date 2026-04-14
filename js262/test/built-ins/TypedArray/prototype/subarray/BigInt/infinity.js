

/*---
esid: sec-%typedarray%.prototype.subarray
description: Infinity values on begin and end
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert(
    compareArray(sample.subarray(-Infinity), [40n, 41n, 42n, 43n]),
    "begin == -Infinity"
  );
  assert(
    compareArray(sample.subarray(Infinity), []),
    "being == Infinity"
  );
  assert(
    compareArray(sample.subarray(0, -Infinity), []),
    "end == -Infinity"
  );
  assert(
    compareArray(sample.subarray(0, Infinity), [40n, 41n, 42n, 43n]),
    "end == Infinity"
  );
});
