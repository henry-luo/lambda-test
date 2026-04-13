

/*---
esid: sec-get-%typedarray%.prototype.byteLength
description: >
  TypedArray.p.byteLength behaves correctly when the underlying resizable buffer
  is resized such that the TypedArray becomes out of bounds.
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

const rab = CreateResizableArrayBuffer(16, 40);


let tas_and_lengths = [];
for (let ctor of ctors) {
  const length = 8 / ctor.BYTES_PER_ELEMENT;
  tas_and_lengths.push([
    new ctor(rab, 0, length),
    length
  ]);
}
for (let [ta, length] of tas_and_lengths) {
  assert.sameValue(ta.byteLength, length * ta.BYTES_PER_ELEMENT);
}
rab.resize(2);
for (let [ta, length] of tas_and_lengths) {
  assert.sameValue(ta.byteLength, 0);
}

rab.resize(8);
for (let [ta, length] of tas_and_lengths) {
  assert.sameValue(ta.byteLength, length * ta.BYTES_PER_ELEMENT);
}
rab.resize(40);
for (let [ta, length] of tas_and_lengths) {
  assert.sameValue(ta.byteLength, length * ta.BYTES_PER_ELEMENT);
}
