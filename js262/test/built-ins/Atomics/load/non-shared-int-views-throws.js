

/*---
esid: sec-atomics.load
description: >
  Atomics.load throws when operating on non-sharable integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/
testWithNonAtomicsFriendlyTypedArrayConstructors(TA => {
  const buffer = new ArrayBuffer(TA.BYTES_PER_ELEMENT * 4);
  const view = new TA(buffer);
  assert.throws(TypeError, function() {
    Atomics.load(view, 0);
  }, `Atomics.load(new ${TA.name}(buffer), 0) throws TypeError`);
}, null, ["passthrough"]);
