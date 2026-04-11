

/*---
esid: sec-atomics.load
description: >
  Atomics.load will operate on TA when TA.buffer is not a SharedArrayBuffer
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(TA => {
  const buffer = new ArrayBuffer(TA.BYTES_PER_ELEMENT * 4);
  const view = new TA(buffer);
  assert.sameValue(Atomics.load(view, 0), 0n, 'Atomics.load(view, 0) returns 0n');
}, null, ["passthrough"]);
