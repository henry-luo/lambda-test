

/*---
esid: sec-%typedarray%.prototype.slice
description: Infinity values on start and end
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert(
    compareArray(sample.slice(-Infinity), [40n, 41n, 42n, 43n]),
    "start == -Infinity"
  );
  assert(
    compareArray(sample.slice(Infinity), []),
    "start == Infinity"
  );
  assert(
    compareArray(sample.slice(0, -Infinity), []),
    "end == -Infinity"
  );
  assert(
    compareArray(sample.slice(0, Infinity), [40n, 41n, 42n, 43n]),
    "end == Infinity"
  );
});
