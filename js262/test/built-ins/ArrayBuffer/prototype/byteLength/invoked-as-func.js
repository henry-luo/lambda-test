

/*---
esid: sec-get-arraybuffer.prototype.bytelength
description: Throws a TypeError exception when invoked as a function
info: |
  24.1.4.1 get ArrayBuffer.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError
  exception.
  ...
---*/

var getter = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter();
});
