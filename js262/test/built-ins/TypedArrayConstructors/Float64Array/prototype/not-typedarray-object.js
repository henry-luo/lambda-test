

/*---
esid: sec-properties-of-typedarray-prototype-objects
description: >
  Float64Array.prototype is not a TypedArray instance object.
info: |
  A TypedArray prototype object is an ordinary object. It does not have
  a [[ViewedArrayBuffer]] or any other of the internal slots that are
  specific to TypedArray instance objects.
features: [TypedArray]
---*/

assert.throws(TypeError, function() {
  Float64Array.prototype.buffer;
});
