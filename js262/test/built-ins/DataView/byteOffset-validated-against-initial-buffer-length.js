

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  The byteOffset argument is validated against the initial buffer length.
info: |
  DataView ( buffer [ , byteOffset [ , byteLength ] ] )

  ...
  3. Let offset be ? ToIndex(byteOffset).
  ...
  5. Let bufferByteLength be ArrayBufferByteLength(buffer, seq-cst).
  6. If offset > bufferByteLength, throw a RangeError exception.
  ...
  10. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DataView.prototype%",
      « [[DataView]], [[ViewedArrayBuffer]], [[ByteLength]], [[ByteOffset]] »).
  ...

  OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
  ...

features: [Reflect.construct]
---*/

let newTarget = Object.defineProperty(function(){}.bind(), "prototype", {
  get() {
    throw new Test262Error("GetPrototypeFromConstructor not executed");
  }
});


let ab = new ArrayBuffer(0);


let byteOffset = 10;

assert.throws(RangeError, () => {
  Reflect.construct(DataView, [ab, byteOffset], newTarget);
});
