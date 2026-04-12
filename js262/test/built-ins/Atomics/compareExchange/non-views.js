

/*---
esid: sec-atomics.compareexchange
description: >
  Test Atomics.compareExchange on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.compareExchange(view, 0, 0, 0);
  });
});
