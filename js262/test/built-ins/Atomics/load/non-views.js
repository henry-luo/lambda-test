

/*---
esid: sec-atomics.load
description: >
  Test Atomics.load on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.load(view, 0);
  });
});
