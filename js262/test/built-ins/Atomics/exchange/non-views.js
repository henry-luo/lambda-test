

/*---
esid: sec-atomics.exchange
description: >
  Test Atomics.exchange on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.exchange(view, 0, 0);
  });
});
