

/*---
esid: sec-properties-of-typedarray-prototype-objects
description: >
  Int16Array.prototype is not a TypedArray instance object.
info: |
  A TypedArray prototype object is an ordinary object. It does not have
  a [[ViewedArrayBuffer]] or any other of the internal slots that are
  specific to TypedArray instance objects.
features: [TypedArray]
---*/

assert.throws(TypeError, function() {
  Int16Array.prototype.buffer;
});
