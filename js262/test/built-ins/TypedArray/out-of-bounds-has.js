

/*---
esid: sec-isvalidintegerindex
description: >
  In-bound indices are testable with `in` on TypedArrays backed by resizable buffers.
info: |
  IsValidIntegerIndex ( O, index )
  ...
  6. Let length be IntegerIndexedObjectLength(O, getBufferByteLength).
  7. If length is out-of-bounds or ℝ(index) < 0 or ℝ(index) ≥ length, return false.
  ...
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 40 * ctor.BYTES_PER_ELEMENT);
  const array = new ctor(rab, 0, 4);
  
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
  rab.resize(2 * ctor.BYTES_PER_ELEMENT);
  
  
  for (let i = 0; i < 4; ++i) {
    assert(!(i in array));
  }
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
  
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
  rab.resize(40 * ctor.BYTES_PER_ELEMENT);
  
  for (let i = 0; i < 4; ++i) {
    assert(i in array);
  }
}
