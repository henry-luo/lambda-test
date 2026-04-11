

/*---
esid: sec-get-sharedarraybuffer.prototype.bytelength
description: Throws a TypeError exception when `this` is an ArrayBuffer
features: [SharedArrayBuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  var ab = new ArrayBuffer(4);
  getter.call(ab);
}, "`this` cannot be an ArrayBuffer");
