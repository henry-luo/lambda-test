

/*---
esid: sec-sharedarraybuffer.prototype.slice
description: >
  Throws a TypeError if `this` is an ArrayBuffer
features: [ArrayBuffer, SharedArrayBuffer]
---*/

assert.throws(TypeError, function() {
  var ab = new ArrayBuffer(0);
  SharedArrayBuffer.prototype.slice.call(ab);
}, "`this` value cannot be an ArrayBuffer");
