

/*---
esid: sec-function.prototype.apply
description: >
  Function.p.apply behaves correctly when the argument array is a
  TypedArray backed by resizable buffer
includes: [compareArray.js, resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/

for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taWrite = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  function func(...args) {
    return [...args];
  }
  assert.compareArray(ToNumbers(func.apply(null, fixedLength)), [
    0,
    1,
    2,
    3
  ]);
  assert.compareArray(ToNumbers(func.apply(null, fixedLengthWithOffset)), [
    2,
    3
  ]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTracking)), [
    0,
    1,
    2,
    3
  ]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTrackingWithOffset)), [
    2,
    3
  ]);

  
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  assert.compareArray(ToNumbers(func.apply(null, fixedLength)), []);
  assert.compareArray(ToNumbers(func.apply(null, fixedLengthWithOffset)), []);
  assert.compareArray(ToNumbers(func.apply(null, lengthTracking)), [
    0,
    1,
    2
  ]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTrackingWithOffset)), [2]);

  
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  assert.compareArray(ToNumbers(func.apply(null, fixedLength)), []);
  assert.compareArray(ToNumbers(func.apply(null, fixedLengthWithOffset)), []);
  assert.compareArray(ToNumbers(func.apply(null, lengthTracking)), [0]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTrackingWithOffset)), []);

  
  rab.resize(0);
  assert.compareArray(ToNumbers(func.apply(null, fixedLength)), []);
  assert.compareArray(ToNumbers(func.apply(null, fixedLengthWithOffset)), []);
  assert.compareArray(ToNumbers(func.apply(null, lengthTracking)), []);
  assert.compareArray(ToNumbers(func.apply(null, lengthTrackingWithOffset)), []);

  
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  assert.compareArray(ToNumbers(func.apply(null, fixedLength)), [
    0,
    0,
    0,
    0
  ]);
  assert.compareArray(ToNumbers(func.apply(null, fixedLengthWithOffset)), [
    0,
    0
  ]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTracking)), [
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  assert.compareArray(ToNumbers(func.apply(null, lengthTrackingWithOffset)), [
    0,
    0,
    0,
    0
  ]);
}
