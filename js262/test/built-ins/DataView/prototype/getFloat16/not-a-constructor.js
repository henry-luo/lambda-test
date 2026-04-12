

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  DataView.prototype.getFloat16 does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Float16Array, Reflect.construct, DataView, arrow-function, ArrayBuffer]
---*/

assert.sameValue(
  isConstructor(DataView.prototype.getFloat16),
  false,
  'isConstructor(DataView.prototype.getFloat16) must return false'
);

assert.throws(TypeError, () => {
  let dv = new DataView(new ArrayBuffer(16)); new dv.getFloat16(0, 0);
});

