

/*---
esid: sec-%typedarray%.prototype.indexof
description: >
  TypedArray.p.indexOf behaves correctly when the backing resizable buffer is
  grown during argument coercion.
includes: [resizableArrayBufferUtils.js]
features: [resizable-arraybuffer]
---*/


for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    lengthTracking[i] = MayNeedBigInt(lengthTracking, 1);
  }
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
  let n0 = MayNeedBigInt(lengthTracking, 0);
  assert.sameValue(lengthTracking.indexOf(n0), -1);
  
  assert.sameValue(lengthTracking.indexOf(n0, evil), -1);
}


for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  lengthTracking[0] = MayNeedBigInt(lengthTracking, 1);
  let evil = {
    valueOf: () => {
      rab.resize(6 * ctor.BYTES_PER_ELEMENT);
      return -4;
    }
  };
  let n1 = MayNeedBigInt(lengthTracking, 1);
  assert.sameValue(lengthTracking.indexOf(n1, -4), 0);
  
  
  assert.sameValue(lengthTracking.indexOf(n1, evil), 0);
}
