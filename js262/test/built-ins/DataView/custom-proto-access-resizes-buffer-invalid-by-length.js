

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  The sum of the view's offset and byte length cannot exceed the underlying
  buffer's byte length if it is modified during retrieval of the NewTarget's
  prototype.
features: [resizable-arraybuffer]
---*/


assert.sameValue(typeof ArrayBuffer.prototype.resize, 'function');

var buffer = new ArrayBuffer(3, {maxByteLength: 3});
var expectedError;

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function() {
    try {
      buffer.resize(2);
      expectedError = RangeError;
    } catch (error) {
      expectedError = null;
    }
  }
});
var error = null;

try {
  Reflect.construct(DataView, [buffer, 1, 2], newTarget);
} catch (caught) {
  error = caught.constructor;
}

assert.sameValue(error, expectedError);
