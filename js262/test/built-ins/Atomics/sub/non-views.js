

/*---
esid: sec-atomics.sub
description: >
  Test Atomics.sub on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(view) {
  assert.throws(TypeError, function() {
    Atomics.sub(view, 0, 0);
  });
});
