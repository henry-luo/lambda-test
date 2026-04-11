

/*---
esid: sec-atomics.or
description: >
  Test range checking of Atomics.or on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
var views = nonClampedIntArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.or(view, IdxGen(view), 10);
    });
  });
}, views);
