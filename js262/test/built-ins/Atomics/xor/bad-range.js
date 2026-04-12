

/*---
esid: sec-atomics.xor
description: >
  Test range checking of Atomics.xor on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

var sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
var views = nonClampedIntArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  let view = new TA(sab);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.xor(view, IdxGen(view), 0);
    });
  });
}, views);
