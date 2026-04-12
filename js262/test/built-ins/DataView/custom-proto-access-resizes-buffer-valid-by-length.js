

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  The sum of the view's offset and byte length may equal the underlying
  buffer's byte length if it is modified during retrieval of the NewTarget's
  prototype.
features: [resizable-arraybuffer]
---*/


assert.sameValue(typeof ArrayBuffer.prototype.resize, 'function');

var buffer = new ArrayBuffer(3, {maxByteLength: 3});

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function() {
    try {
      buffer.resize(2);
    } catch (error) {}
  }
});

var result = Reflect.construct(DataView, [buffer, 1, 1], newTarget);

assert.sameValue(result.constructor, DataView);
assert.sameValue(result.byteLength, 1);
