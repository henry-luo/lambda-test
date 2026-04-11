

/*---
esid: sec-atomics.load
description: >
  Test range checking of Atomics.load on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, Atomics, BigInt, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

var buffer = new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 2);

testWithBigIntTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.load(view, IdxGen(view));
    });
  });
}, null, ["passthrough"]);
