

/*---
esid: sec-isvalidintegerindex
description: >
  Getting and setting in-bounds and out-of-bounds indices on TypedArrays backed
  by resizable buffers.
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 40 * ctor.BYTES_PER_ELEMENT);
  const array = new ctor(rab, 0, 4);
  
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(Convert(array[i]), 0);
  }
  
  for (let i = 0; i < 4; ++i) {
    array[i] = MayNeedBigInt(array, i);
  }
  
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(Convert(array[i]), i, `${ctor} array fails within-bounds read`);
  }
  rab.resize(2 * ctor.BYTES_PER_ELEMENT);
  
  
  for (let i = 0; i < 4; ++i) {
    assert.sameValue(array[i], undefined);
  }
  
  for (let i = 0; i < 4; ++i) {
    array[i] = MayNeedBigInt(array, 10);
  }
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
  
  for (let i = 0; i < 2; ++i) {
    assert.sameValue(array[i], MayNeedBigInt(array, i));
  }
  
  for (let i = 2; i < 4; ++i) {
    assert.sameValue(array[i], MayNeedBigInt(array, 0));
  }
  rab.resize(40 * ctor.BYTES_PER_ELEMENT);
  
  for (let i = 0; i < 2; ++i) {
    assert.sameValue(array[i], MayNeedBigInt(array, i));
  }
  for (let i = 2; i < 4; ++i) {
    assert.sameValue(array[i], MayNeedBigInt(array, 0));
  }
}
