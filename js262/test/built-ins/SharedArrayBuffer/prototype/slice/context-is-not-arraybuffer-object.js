

/*---
description: >
  Throws a TypeError if `this` does not have an [[ArrayBufferData]] internal slot.
features: [SharedArrayBuffer]
---*/

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.slice.call({});
}, "`this` value is Object");

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.slice.call([]);
}, "`this` value is Array");
