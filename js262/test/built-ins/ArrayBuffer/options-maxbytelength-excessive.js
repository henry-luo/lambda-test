

/*---
esid: sec-arraybuffer-constructor
description: |
  Invoked with an options object whose `maxByteLength` property exceeds the
  maximum length value
info: |
  ArrayBuffer( length [ , options ] )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  3. Let requestedMaxByteLength be ? GetArrayBufferMaxByteLengthOption(options).
  [...]

  1.1.5 GetArrayBufferMaxByteLengthOption ( options )

  1. If Type(options) is not Object, return empty.
  2. Let maxByteLength be ? Get(options, "maxByteLength").
  3. If maxByteLength is undefined, return empty.
  4. Return ? ToIndex(maxByteLength).
features: [resizable-arraybuffer]
---*/

assert.throws(RangeError, function() {
  
  new ArrayBuffer(0, { maxByteLength: 9007199254740992 });
});
