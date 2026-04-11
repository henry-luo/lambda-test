

/*---
esid: sec-%typedarray%.prototype.every
description: >
  TypedArray.p.every behaves correctly when receiver is backed by resizable
  buffer that is shrunk mid-iteration
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

let values;
let rab;
let resizeAfter;
let resizeTo;


function ResizeMidIteration(n) {
  
  return CollectValuesAndResize(n, values, rab, resizeAfter, resizeTo);
}


for (let ctor of ctors) {
  rab = CreateRabForTest(ctor);
  const fixedLength = new ctor(rab, 0, 4);
  values = [];
  resizeAfter = 2;
  resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(fixedLength.every(ResizeMidIteration));
  assert.compareArray(values, [
    0,
    2,
    undefined,
    undefined
  ]);
}
for (let ctor of ctors) {
  rab = CreateRabForTest(ctor);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  values = [];
  resizeAfter = 1;
  resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(fixedLengthWithOffset.every(ResizeMidIteration));
  assert.compareArray(values, [
    4,
    undefined
  ]);
}
for (let ctor of ctors) {
  rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  values = [];
  resizeAfter = 2;
  resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(lengthTracking.every(ResizeMidIteration));
  assert.compareArray(values, [
    0,
    2,
    4,
    undefined
  ]);
}
for (let ctor of ctors) {
  rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  values = [];
  resizeAfter = 1;
  resizeTo = 3 * ctor.BYTES_PER_ELEMENT;
  assert(lengthTrackingWithOffset.every(ResizeMidIteration));
  assert.compareArray(values, [
    4,
    undefined
  ]);
}
