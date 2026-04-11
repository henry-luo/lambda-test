

/*---
esid: sec-atomics.xor
description: >
  Test Atomics.xor on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.xor(view, 0, 0);
  });
});
