

/*---
description: >
  Throws a TypeError exception when `this` does not have a [[ArrayBufferData]]
  internal slot
features: [SharedArrayBuffer, DataView, Int8Array]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter.call({});
});

assert.throws(TypeError, function() {
  getter.call([]);
});

var ta = new Int8Array(new SharedArrayBuffer(8));
assert.throws(TypeError, function() {
  getter.call(ta);
});

var dv = new DataView(new SharedArrayBuffer(8), 0);
assert.throws(TypeError, function() {
  getter.call(dv);
});
