

/*---
description: Throws a TypeError exception when invoked as a function
features: [SharedArrayBuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter();
});
