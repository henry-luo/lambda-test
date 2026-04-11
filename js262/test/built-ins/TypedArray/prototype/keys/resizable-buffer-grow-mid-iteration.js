

/*---
esid: sec-%typedarray%.prototype.keys
description: >
  TypedArray.p.keys behaves correctly when receiver is backed by a resizable
  buffer and is grown mid-iteration
features: [resizable-arraybuffer]
includes: [compareArray.js, resizableArrayBufferUtils.js]
---*/


for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLength = new ctor(rab, 0, 4);
  
  TestIterationAndResize(fixedLength.keys(), [
    0,
    1,
    2,
    3
  ], rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  
  TestIterationAndResize(fixedLengthWithOffset.keys(), [
    0,
    1
  ], rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  TestIterationAndResize(lengthTracking.keys(), [
    0,
    1,
    2,
    3,
    4,
    5
  ], rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  TestIterationAndResize(lengthTrackingWithOffset.keys(), [
    0,
    1,
    2,
    3
  ], rab, 2, 6 * ctor.BYTES_PER_ELEMENT);
}
