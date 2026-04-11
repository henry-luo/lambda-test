

/*---
esid: sec-get-arraybuffer.prototype.maxbytelength
description: Throws a TypeError exception when `this` is a SharedArrayBuffer
info: |
  get ArrayBuffer.prototype.maxByteLength

  1. Let O be the this value.
  2. Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
  3. If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
  [...]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var maxByteLength = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, "maxByteLength"
);

var getter = maxByteLength.get;
var sab = new SharedArrayBuffer(4);

assert.sameValue(typeof getter, "function");

assert.throws(TypeError, function() {
  getter.call(sab);
}, "`this` cannot be a SharedArrayBuffer");

Object.defineProperties(sab, { maxByteLength: maxByteLength });

assert.throws(TypeError, function() {
  sab.maxByteLength;
}, "`this` cannot be a SharedArrayBuffer");
