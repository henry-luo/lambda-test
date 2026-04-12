

/*---
esid: sec-atomics.notify
description: >
  Test Atomics.notify on view values other than TypedArrays
includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

testWithAtomicsNonViewValues(function(nonView) {
  assert.throws(TypeError, function() {
    Atomics.notify(nonView, 0, 0);
  }); 
});
