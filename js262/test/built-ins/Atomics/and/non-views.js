

/*---
esid: sec-atomics.and
description: >
  Test Atomics.and on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.and(view, 0, 0);
  });
});
